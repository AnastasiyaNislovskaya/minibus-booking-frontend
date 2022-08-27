import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { ScheduleService } from "../services/ScheduleService";
import { BookingService } from "../services/BookingService";
import { AuthService } from "../services/AuthService";

export default function Schedule() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAllTrips();
    }, []);

    const getAllTrips = () => {
        ScheduleService.getAllTrips()
            .then((response) => {
                setTrips(response.data);
                console.log("trips data: ", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const user = AuthService.getCurrentUser();

    const handleBooking = (userId, tripId) => {
        console.log("user id: ", userId);
        console.log("trip id: ", tripId);
        BookingService.bookTicket(userId, tripId)
            .then((response) => {
                getAllTrips();
                console.log("ticket booked successfully", response.data);
                alert("Билет заказан успешно!");
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                    <td><strong>Доступные места</strong></td>
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
                        <td>{trip.available_sets}</td>
                        <td>
                            <button className="btn btn-primary"
                                    onClick={() => handleBooking(user.id, trip.id)}>
                                <span>Заказать</span>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}
