import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Schedule from "./components/Schedule";
import BookingTicket from "./components/BookingTicket";
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import AdminBoard from "./components/AdminBoard";
import NotFound from "./components/NotFound";
import { AuthService } from "./services/AuthService";
import { eventBus as EventBus } from "./utils/eventBus";

export default function App() {
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
        <Router>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to={"/"} className="nav-link">Главная</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/contacts"} className="nav-link">Контакты</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/schedule"} className="nav-link">Расписание</Link>
                        </li>

                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                        )}
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="navbar-item">
                                    <Link to={"/profile"} className="nav-link">
                                        {currentUser.username}
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
                    </div>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route exact path={"/"} element={<Home />} />
                        <Route exact path={"/contacts"} element={<Contacts />} />
                        <Route exact path={"/login"} element={<Login />} />
                        <Route exact path={"/register"} element={<Register />} />
                        <Route exact path={"/profile"} element={<Profile />} />
                        <Route exact path={"/schedule"} element={<Schedule />} />
                        <Route exact path={"/book"} element={<BookingTicket />} />
                        <Route exact path={"/admin"} element={<AdminBoard />} />
                        <Route exact path={"/create_user"} element={<AddUser />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
