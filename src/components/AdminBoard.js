import React, { useEffect, useState } from "react";
import { AdminService } from "../services/AdminService";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        AdminService.getAllUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteUser = (id) => {
        AdminService.deleteUser(id).then(() => {
            getAllUsers();
            setUsers(users.filter(user => user.id !== id));
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h2 className="text-center">
                    <strong>Список пользователей</strong>
                </h2>
                <br />
            </header>
            <br />
            <Link to="/create_user" className="btn btn-success"> Добавить пользователя </Link>
            <br /><br />
            <Table hover variant="light">
                <thead>
                <tr align="center">
                    <th><strong>Имя</strong></th>
                    <th><strong>Фамилия</strong></th>
                    <th><strong>Логин</strong></th>
                    <th><strong>Email</strong></th>
                    <th><strong>Роль</strong></th>
                    <th><strong>Действия</strong></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id} align="center">
                        <td>{user.first_name} </td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.roles[0].name.toLowerCase()}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/update_user/${user.id}`}> Изменить </Link>
                        </td>
                        <td>
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
}