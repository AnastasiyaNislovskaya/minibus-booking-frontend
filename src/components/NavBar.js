import React, { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { eventBus as EventBus } from "../utils/eventBus";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0 h5">
                <div className="navbar-nav ">
                    <li className="navbar-item">
                        <Link to={"/"} className="nav-link">
                            Главная
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={"/contacts"} className="nav-link">
                            Контакты
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={"/schedule"} className="nav-link">
                            Расписание
                        </Link>
                    </li>
                </div>
                {showAdminBoard && (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link">
                                Администратор
                            </Link>
                        </li>
                    </div>
                )}
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/tickets"} className="nav-link">
                                Заказы
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                Выход
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to={"/login"} className="nav-link">
                                Вход
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">
                                Регистрация
                            </a>
                        </li>
                    </div>
                )}
            </nav>
        </div>
    );
}