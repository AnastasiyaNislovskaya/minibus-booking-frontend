import React, {Component} from 'react';
import ScheduleService from "../services/ScheduleService";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table} from "react-bootstrap";
import AuthService from "../services/AuthService";
import BookingService from "../services/BookingService";

export default class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: []
        };
    }

    componentDidMount() {
        ScheduleService.getAllTrips().then(
            response => {
                this.setState({trips: response.data})
            }
        );
    }

    bookTicket(userId, tripId) {
        BookingService.bookTicket(userId, tripId).then(() => {
            alert('Билет заказан успешно!');
        });
    }

    render() {
        const {trips} = this.state;

        const {trip} = {
            id: "",
            departure_time: "",
            arrival_time: "",
            fare: "",
            available_sets: "",
            trip_detail: {
                id: "",
                departure: "",
                arrival: "",
                trip_date: "",
            }
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h2 className="text-center">
                        <strong>Доступыне рейсы</strong>
                    </h2>
                    <br/>
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
                                <button className="btn btn-secondary"
                                        onClick={() => this.bookTicket(AuthService.getCurrentUser().id, trip.id)}>
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
}