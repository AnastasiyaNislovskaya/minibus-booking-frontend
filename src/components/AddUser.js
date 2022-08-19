import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import AdminService from "../services/AdminService";

export default function AddUser() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const user = {firstName, lastName, email}

        if (id) {
            AdminService.updateUser(id, user).then((response) => {
                history('/admin')
            }).catch(error => {
                console.log(error)
            })
        } else {
            AdminService.createUser(user).then((response) => {
                console.log(response.data)
                history('/admin');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        AdminService.getUserById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
        if (id) {
            return <h2 className="text-center">Изменить</h2>
        } else {
            return <h2 className="text-center">Добавить</h2>
        }
    }

    return (
        <div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Имя :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Фамилия :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success"
                                        onClick={(e) => saveOrUpdateEmployee(e)}>
                                    Submit
                                </button>
                                <Link to="/admin" className="btn btn-danger"> Назад </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}