import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                         alt="profile-img"
                         className="profile-img-card"
                    />

                    <Form onSubmit={this.handleRegister}
                          ref={c => {
                              this.form = c;
                          }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="firstName">Имя</label>
                                    <Input type="text"
                                           className="form-control"
                                           name="firstName"
                                           value={this.state.first_name}
                                           onChange={this.onChangeFirstName}
                                           validations={[required, vusername]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Фамилия</label>
                                    <Input type="text"
                                           className="form-control"
                                           name="lastName"
                                           value={this.state.last_name}
                                           onChange={this.onChangeLastName}
                                           validations={[required, vusername]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Логин</label>
                                    <Input type="text"
                                           className="form-control"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.onChangeUsername}
                                           validations={[required, vusername]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input type="text"
                                           className="form-control"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.onChangeEmail}
                                           validations={[required, email]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <Input type="password"
                                           className="form-control"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onChangePassword}
                                           validations={[required, vpassword]}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Зарегистрироваться</button>
                                </div>
                            </div>
                        )}
                        {this.state.message && (
                            <div className="form-group">
                                <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                     role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{display: "none"}}
                                     ref={c => {
                                         this.checkBtn = c;
                                     }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}