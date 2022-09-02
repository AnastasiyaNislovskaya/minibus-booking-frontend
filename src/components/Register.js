import React from "react";
import CreateUser from "./CreateUser";

export default function Register() {

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <CreateUser btnAction={"Зарегистрироваться"} redirectPath={"/profile"} />
            </div>
        </div>
    );
}
