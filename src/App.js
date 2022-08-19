import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {LoginForm} from "./components/LoginForm";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Schedule from "./components/Schedule";

export default function App() {
    const [user, setUser] = useState({username: "", password: ""});

    const Login = details => {
        console.log(details);

        setUser({
            username: details.username,
            password: details.password
        });

        console.log("login");
    }

    const Logout = () => {
        setUser({
            username: "",
            password: ""
        });

        console.log("logout");
    }

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    {/*<Link to={"/"} className="navbar-brand">*/}
                    {/*    booking*/}
                    {/*</Link>*/}
                    <div className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to={"/"} className="nav-link">Главная</Link>
                        </li>
                        {/*{AuthService.getCurrentUser().roles[0].name === "ROLE_ADMIN" &&*/}
                        {/*    <Link to="/admin" className="nav-item nav-link">Администратор</Link>}*/}
                        <li className="navbar-item">
                            <Link to={"/contacts"} className="nav-link">Контакты</Link>
                        </li>
                        {/*<li className="navbar-item">*/}
                        {/*    <Link to={"/schedule"} className="nav-link">Расписание</Link>*/}
                        {/*</li>*/}

                        {(
                            user.username !== ""
                        ) ? (
                            <div className="navbar-nav ml-auto">
                                <li className="navbar-item">
                                    <Link to={"/profile"} className="nav-link">
                                        {user.username}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={Logout}>Выход</a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="navbar-item">
                                    <Link to={"/login"} className="nav-link">
                                        Вход
                                    </Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <a href="/register" className="nav-link">*/}
                                {/*        Регистрация*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </div>
                        )}
                    </div>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route exact path={"/contacts"} element={<Contacts/>}/>
                        <Route path={"/login"} element={<LoginForm Login={Login}/>}/>
                        <Route exact path={"/register"} element={<Register/>}/>
                        <Route exact path={"/profile"} element={<Profile/>}/>
                        <Route exact path={"/schedule"} element={<Schedule/>}/>
                        <Route exact path={"/admin"} element={<Admin/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
