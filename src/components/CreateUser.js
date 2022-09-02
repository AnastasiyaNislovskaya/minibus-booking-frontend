import React, { useRef, useState } from "react";
import { AuthService } from "../services/AuthService";
import { required, validEmail, validPassword, validPhone, validUsername } from "../utils/validation";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";

export default function CreateUser({ btnAction, redirectPath }) {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };

    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };

    const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(firstName, lastName, phone, username, email, password)
                .then((response) => {
                        setMessage(response.data.message);
                        setSuccessful(true);
                        navigate(redirectPath);
                        window.location.reload();
                    },
                    (error) => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setMessage(resMessage);
                        setSuccessful(false);
                    }
                );
        }
    };

    return (
        <div>
            <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName">Имя</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={firstName}
                                onChange={onChangeFirstName}
                                validations={[required, validUsername]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Фамилия</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={lastName}
                                onChange={onChangeLastName}
                                validations={[required, validUsername]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={phone}
                                onChange={onChangePhone}
                                validations={[required, validPhone]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Логин</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, validUsername]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, validEmail]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, validPassword]}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">{btnAction}</button>
                        </div>
                    </div>
                )}
                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    );
}