import React, {Component} from 'react'
import UserService from "../services/AdminService";
import {Table} from "react-bootstrap";

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        UserService.getAllUsers().then(
            response => {
                this.setState({users: response.data})
            }
        );
    }

    deleteUser(id) {
        UserService.deleteUser(id).then(() => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        })
    }

    addUser(first_name, last_name, username, email, password) {
        UserService.createUser(first_name, last_name, username, email, password).then(

        )
    }

    render() {
        const {users} = this.state;

        console.log(users)

        return (
            <div className="container">
                <header className="jumbotron">
                    <h2 className="text-center">
                        <strong>Список пользователей</strong>
                    </h2>
                    <br/>
                </header>
                <br/>
                <button className="btn btn-primary" onClick={this.addUser()}>Добавить пользователя</button>
                <br/>
                <br/>
                <Table hover variant="light">
                    <thead>
                    <tr align="center">
                        <th><strong>Имя</strong></th>
                        <th><strong>Фамилия</strong></th>
                        <th><strong>Логин</strong></th>
                        <th><strong>Email</strong></th>
                        <th></th>
                        <th><strong>Действия</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id} align="center">
                            <td>{user.first_name} </td>
                            <td>{user.last_name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.roles[0].name}</td>
                            <td>
                                {/*<button onClick={() => this.editUser(user.id)}*/}
                                {/*        className="btn btn-info">Update*/}
                                {/*</button>*/}
                                <button style={{marginLeft: "10px"}}
                                        onClick={() => this.deleteUser(user.id)}
                                        className="btn btn-danger">
                                    <span>Удалить</span>
                                </button>
                                {/*<button style={{marginLeft: "10px"}}*/}
                                {/*        onClick={() => this.viewUser(user.id)}*/}
                                {/*        className="btn btn-info">View*/}
                                {/*</button>*/}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}