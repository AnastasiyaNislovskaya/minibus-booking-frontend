import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/AuthService";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Schedule from "./components/Schedule";
import Contacts from "./components/Contacts";
import Admin from "./components/Admin";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: AuthService.getCurrentUser()
            })
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const {currentUser} = this.state;

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
                            <li className="navbar-item">
                                <Link to={"/schedule"} className="nav-link">Расписание</Link>
                            </li>
                            {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="navbar-item">
                                        <Link to={"/profile"} className="nav-link">
                                            {currentUser.username}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/login" className="nav-link" onClick={this.logOut}>Выход</a>
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
                        <Switch>
                            <Route exact path={["/", "/home"]} component={Home}/>
                            <Route exact path={"/contacts"} component={Contacts}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/schedule" component={Schedule}/>
                            <Route path="/admin" component={Admin}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
