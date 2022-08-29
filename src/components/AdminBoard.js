import React, { useEffect, useState } from "react";
import { AdminService } from "../services/AdminService";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthService } from "../services/AuthService";
import Forbidden from "./Forbidden";

export default function AdminBoard() {
    const user = AuthService.getCurrentUser();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        AdminService.getAllUsers()
            .then((response) => {
                setUsers(response.data);
                console.log("users data: ", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        console.log("user id: ", id);
        AdminService.deleteUser(id)
            .then((response) => {
                getAllUsers();
                console.log("user deleted successfully", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (<div>
            {user ? (
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
                            <th><strong>Id</strong></th>
                            <th><strong>Имя</strong></th>
                            <th><strong>Фамилия</strong></th>
                            <th><strong>Логин</strong></th>
                            <th><strong>Email</strong></th>
                            <th><strong>Роль</strong></th>
                            <th><strong>Действия</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id} align="center">
                                <td>{user.id} </td>
                                <td>{user.first_name} </td>
                                <td>{user.last_name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.roles[0].name.toLowerCase().substring(5)}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}> Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            ) : (
                <Forbidden />
            )}
        </div>
    );
}