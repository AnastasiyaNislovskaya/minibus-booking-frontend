import React, { useEffect, useState } from "react";
import { TicketsService } from "../services/TicketsService";
import { Table } from "react-bootstrap";
import { AuthService } from "../services/AuthService";

export default function BookedTickets() {
    const [tickets, setTickets] = useState([]);

    const user = AuthService.getCurrentUser();

    useEffect(() => {
        getAllTickets();
    }, []);

    const getAllTickets = () => {
        TicketsService.getAllTickets(user.id)
            .then((response) => {
                setTickets(response.data);
                console.log("tickets data: ", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        console.log("ticket id: ", id);
        TicketsService.deleteTicket(id)
            .then((response) => {
                getAllTickets();
                console.log("ticket deleted successfully", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            {tickets.length > 0 ? (
                <div className="container">
                    <header className="jumbotron">
                        <h2 className="text-center">
                            <strong>Заказанные билеты</strong>
                        </h2>
                        <br />
                    </header>
                    <div>
                        <Table hover variant="light">
                            <thead>
                            <tr align="center">
                                <td><strong>Пункт отправления</strong></td>
                                <td><strong>Пункт прибытия</strong></td>
                                <td><strong>Дата отправления </strong></td>
                                <td><strong>Время отправления</strong></td>
                                <td><strong>Время прибытия</strong></td>
                                <td><strong>Стоимость билета</strong></td>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {tickets.map(ticket => (
                                <tr key={ticket.id} align="center">
                                    <td>{ticket.trip_schedule.trip_detail.departure}</td>
                                    <td>{ticket.trip_schedule.trip_detail.arrival}</td>
                                    <td>{ticket.trip_schedule.trip_detail.trip_date}</td>
                                    <td>{ticket.trip_schedule.departure_time}</td>
                                    <td>{ticket.trip_schedule.arrival_time}</td>
                                    <td>{ticket.trip_schedule.fare} руб.</td>
                                    <td>
                                        <button className="btn btn-danger"
                                                onClick={() => handleDelete(ticket.id)}> Отменить
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <h4 className="text-center">
                    <strong>У вас нет заказанных билетов</strong>
                </h4>
            )}
        </div>
    );
}