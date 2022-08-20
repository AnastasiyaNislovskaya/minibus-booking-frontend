import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import ScheduleService from "../services/ScheduleService";
import { Link } from "react-router-dom";

export default function Schedule() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAllTrips();
    }, []);

    const getAllTrips = () => {
        ScheduleService.getAllTrips().then((response) => {
            setTrips(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    // bookTicket(userId, tripId);
    // {
    //     BookingService.bookTicket(userId, tripId).then(() => {
    //         alert("Билет заказан успешно!");
    //     });
    // }

    return (
        <div className="container">
            <header className="jumbotron">
                <h2 className="text-center">
                    <strong>Доступыне рейсы</strong>
                </h2>
                <br />
            </header>
            <Table hover variant="light">
                <thead>
                <tr align="center">
                    <td><strong>Откуда</strong></td>
                    <td><strong>Куда</strong></td>
                    <td><strong>Дата</strong></td>
                    <td><strong>Отправление</strong></td>
                    <td><strong>Прибытие</strong></td>
                    <td><strong>Стоимость</strong></td>
                    {/*<td>Доступные места</td>*/}
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {trips.map(trip => (
                    <tr key={trip.id} align="center">
                        <td>{trip.trip_detail.departure}</td>
                        <td>{trip.trip_detail.arrival}</td>
                        <td>{trip.trip_detail.trip_date}</td>
                        <td>{trip.departure_time}</td>
                        <td>{trip.arrival_time}</td>
                        <td>{trip.fare} руб.</td>
                        {/*<td>{trip.available_sets}</td>*/}
                        <td>
                            {/*TODO*/}
                            <Link to="/book" className="btn btn-secondary"> Заказать </Link>
                            {/*<button className="btn btn-secondary"*/}
                            {/*        onClick={() => this.bookTicket(AuthService.getCurrentUser().id, trip.id)}>*/}
                            {/*    <span>Заказать</span>*/}
                            {/*</button>*/}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}