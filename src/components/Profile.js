import React from "react";
import { AuthService } from "../services/AuthService";
import { Table } from "react-bootstrap";
import Forbidden from "./Forbidden";

export default function Profile() {
    const user = AuthService.getCurrentUser();

    return (
        <div>
            {user ? (
                <div className="container">
                    <header className="jumbotron">
                        <h2 className="text-center">
                            <strong>Профиль</strong>
                        </h2>
                        <br />
                    </header>
                    <div>
                        <Table hover variant="light">
                            <thead>
                            <tr>
                                <td><strong>Имя: </strong></td>
                                <td>{user.first_name}</td>
                            </tr>
                            <tr>
                                <td><strong>Фамилия: </strong></td>
                                <td>{user.last_name}</td>
                            </tr>
                            <tr>
                                <td><strong>Логин: </strong></td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td><strong>Email: </strong></td>
                                <td>{user.email}</td>
                            </tr>
                            </thead>
                        </Table>
                    </div>
                </div>
            ) : (
                <Forbidden/>
            )}
        </div>
    );
}