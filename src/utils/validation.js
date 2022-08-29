import React from "react";
import isEmail from "validator/es/lib/isEmail";

export const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Это поле обязательно к заполнению!
            </div>
        );
    }
};

export const validPhone = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Номер телефона должен содержать от 3 до 20 символов.
            </div>
        );
    }
};

export const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Это невалидный email!
            </div>
        );
    }
};

export const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Имя пользователя должно содержать от 3 до 20 символов.
            </div>
        );
    }
};

export const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Пароль должен содержать от 6 до 40 символов.
            </div>
        );
    }
};