import React from "react";
import CreateUser from "./CreateUser";

export default function AddUser() {
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <CreateUser btnAction={"Добавить"} />
            </div>
        </div>
    );
}
