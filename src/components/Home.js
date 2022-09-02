import React from "react";
import minibus from "../minibus.png";
import { Image, Table } from "react-bootstrap";

export default function Home() {
    return (
        <div className="container">
            <header className="jumbotron">
                <h2 className="text-center">
                    <strong>Система заказа билетов на маршрутные такси</strong>
                </h2>
            </header>
            <div className="align-content-center">
                <Image src={minibus} alt="Minibus" width="700" className="rounded mx-auto d-block" />
            </div>
            <div>
                <h3><strong>Маршруты</strong></h3>
                <br />
                <Table hover aria-flowto="auto">
                    <thead>
                    <tr>
                        <td>Минск - Брест</td>
                        <td>Брест - Минск</td>
                    </tr>
                    <tr>
                        <td>Минск - Гомель</td>
                        <td>Гомель - Минск</td>
                    </tr>
                    <tr>
                        <td>Минск - Гродно</td>
                        <td>Гродно - Минск</td>
                    </tr>
                    <tr>
                        <td>Минск - Витебск</td>
                        <td>Витебск - Минск</td>
                    </tr>
                    <tr>
                        <td>Минск - Могилёв</td>
                        <td>Могилёв - Минск</td>
                    </tr>
                    </thead>
                </Table>
            </div>
        </div>
    );
}
