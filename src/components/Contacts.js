import React, {Component} from 'react';

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h2 className="text-center">
                        <strong>Контакты</strong>
                    </h2>
                    <br/>
                </header>
                <div>
                    <h3>Телефон:</h3>
                    <span>+ 375 (44) 123-45-67</span>
                </div>
                <br/>
                <div>
                    <h3>График работы:</h3>
                    <span>с 8:00 до 20:00 ежедневно</span>
                </div>
                <br/>
                <div>
                    <h3>Юридический адрес:</h3>
                    <span>г.Минск, ул. Сурганова, д.184, к.2а, каб.26</span>
                </div>
            </div>
        );
    }
}