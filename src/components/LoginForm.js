import React, {useState} from "react";

export function LoginForm({Login}) {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                     alt="profile-img"
                     className="profile-img-card"
                />

                <form onSubmit={submitHandler}>
                    <div className="form-inner"></div>

                    <div className="form-group">
                        <label htmlFor="username">Логин</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               value={details.username}
                               onChange={(e) => setDetails({...details, username: e.target.value})}
                            // validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               value={details.password}
                               onChange={(e) => setDetails({...details, password: e.target.value})}
                            // validations={[required]}
                        />
                    </div>

                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">
                            <span>Войти</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}