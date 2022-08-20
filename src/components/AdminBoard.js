import React, { useEffect, useState } from "react";
import UserService from "../services/AdminService";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteUser = (id) => {
        UserService.deleteUser(id).then(() => {
            getAllUsers();
            setUsers(users.filter(user => user.id !== id));
        }).catch(error => {
            console.log(error);
        });
    };

    console.log(users);

    return (
        <div className="container">
            <header className="jumbotron">
                <h2 className="text-center">
                    <strong>Список пользователей</strong>
                </h2>
                <br />
            </header>
            <br />
            <Link to="/create_user" className="btn btn-primary"> Добавить пользователя </Link>
            <br />
            <br />
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
                            {/*<button style={{marginLeft: "10px"}}*/}
                            {/*        onClick={() => this.deleteUser(user.id)}*/}
                            {/*        className="btn btn-danger">*/}
                            {/*    <span>Удалить</span>*/}
                            {/*</button>*/}
                            {/*<button style={{marginLeft: "10px"}}*/}
                            {/*        onClick={() => this.viewUser(user.id)}*/}
                            {/*        className="btn btn-info">View*/}
                            {/*</button>*/}


                            <Link className="btn btn-info" to={`/edit-employee/${user.id}`}> Изменить </Link>
                            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}
                                    style={{ marginLeft: "10px" }}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
    // }
}