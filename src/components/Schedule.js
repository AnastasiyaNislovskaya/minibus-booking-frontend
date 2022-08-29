import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import { ScheduleService } from "../services/ScheduleService";
import { BookingService } from "../services/BookingService";
import { AuthService } from "../services/AuthService";

export default function Schedule() {
    const user = AuthService.getCurrentUser();

    const [trips, setTrips] = useState([]);

    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [tripDate, setTripDate] = useState("");

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

    const handleBooking = (user, trip) => {
        if (user != null) {
            console.log("user id: ", user.id);
            console.log("trip id: ", trip.id);
            BookingService.bookTicket(user.id, trip.id)
                .then((response) => {
                    getAllTrips();
                    console.log("ticket booked successfully", response.data);
                    alert("Билет заказан успешно!");
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Пожалуйста, авторизуйтесь!");
        }
    };

    const onChangeDeparture = (e) => {
        const departure = e.target.value;
        setDeparture(departure);
    };

    const onChangeArrival = (e) => {
        const arrival = e.target.value;
        setArrival(arrival);
    };

    const onChangeDate = (e) => {
        const tripDate = e.target.value;
        setTripDate(tripDate);
    };

    const handleSearch = (departure, arrival, tripDate) => {
        console.log("departure: ", departure);
        console.log("arrival: ", arrival);
        console.log("tripDate: ", tripDate);
        ScheduleService.getTrips(departure, arrival, tripDate)
            .then((response) => {
                setTrips(response.data);
                console.log("trips data: ", response.data);
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
            <div className="row h-100 justify-content-center align-items-center">
                <InputGroup className="col-6">
                    <FormControl
                        placeholder="Гомель"
                        aria-label="Search"
                        type="text"
                        value={departure}
                        onChange={onChangeDeparture}
                    />
                    <FormControl
                        placeholder="Минск"
                        aria-label="Search"
                        type="text"
                        value={arrival}
                        onChange={onChangeArrival}
                    />
                    <FormControl
                        aria-label="Search"
                        type="date"
                        value={tripDate}
                        onChange={onChangeDate}
                    />
                    <button className="btn btn-secondary"
                            onClick={() => handleSearch(departure, arrival, tripDate)}>
                        <span>Найти</span>
                    </button>
                </InputGroup>
            </div>

            <br />
            {trips.length > 0 ? (
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
                                        onClick={() => handleBooking(user, trip)}>
                                    <span>Заказать</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            ) : (
                <h4 className="text-center">
                    <strong>Рейсов по данному запросу нет</strong>
                </h4>
            )}
        </div>
    );
}
