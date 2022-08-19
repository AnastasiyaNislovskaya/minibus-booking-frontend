import React, {Component} from "react";
import AuthService from "../services/AuthService";
import {Navigate} from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""}
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect}/>
        }

        const {currentUser} = this.state;

        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div>
                        <header className="jumbotron">
                            <h3>
                                <strong>Профиль</strong>
                            </h3>
                        </header>
                        <br/>
                        <p>
                            <strong>Имя: </strong>{" "}
                            {currentUser.first_name}
                        </p>
                        <p>
                            <strong>Фамилия: </strong>{" "}
                            {currentUser.last_name}
                        </p>
                        <p>
                            <strong>Логин: </strong>{" "}
                            {currentUser.username}
                        </p>
                        <p>
                            <strong>Email: </strong>{" "}
                            {currentUser.email}
                        </p>
                        <br/>

                        {/*{currentUser.roles[0].name === 'ROLE_ADMIN' &&*/}
                        {/*    <button style={{marginLeft: "10px"}}*/}
                        {/*            onClick={() => AdminService.getAllUsers()}*/}
                        {/*            className="btn btn-primary">*/}
                        {/*        <span>Admin</span>*/}
                        {/*    </button>*/}
                        {/*}*/}

                        {/*<strong>Authorities:</strong>*/}
                        {/*<ul>*/}
                        {/*    {currentUser.roles &&*/}
                        {/*        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}*/}
                        {/*</ul>*/}
                    </div> : null}
            </div>
        );
    }
}