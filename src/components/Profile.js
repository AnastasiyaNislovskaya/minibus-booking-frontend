import React from "react";
import { Link } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export default function Profile() {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Профиль</strong>
                </h3>
            </header>
            <br />
            <p>
                <strong>Имя: </strong>
                {currentUser.first_name}
            </p>
            <p>
                <strong>Фамилия: </strong>
                {currentUser.last_name}
            </p>
            <p>
                <strong>Логин: </strong>
                {currentUser.username}
            </p>
            <p>
                <strong>Email: </strong>
                {currentUser.email}
            </p>
            <br />

            {currentUser.roles[0].name === "ROLE_ADMIN" &&
                <Link to="/admin" className="btn btn-danger"> Admin </Link>
            }
        </div>
    );
}