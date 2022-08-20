import React from "react";

export default function BookingTicket() {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         user_id: "",
    //         trip_schedule_id: ""
    //     }
    //
    //     this.handleBooking = this.handleBooking.bind(this);
    // }

    // handleBooking(e) {
    //     e.preventDefault();
    //
    //     BookingService.bookTicket(
    //         this.state.user_id,
    //         this.state.trip_schedule_id,
    //     ).then(
    //         () => {
    //             alert('Билет заказан успешно!');
    //             this.props.history("/profile");
    //             window.location.reload();
    //         },
    //     )
    // }


    return (
        <div className="container">
            <div>
                <header className="jumbotron">
                    <h3>
                        <strong>Ваш билет</strong>
                    </h3>
                </header>
                <br />
                <p>
                    <strong>Напрвление: </strong>
                    {/*{currentUser.first_name}*/}
                </p>
                <p>
                    <strong>Дата: </strong>
                </p>
                <p>
                    <strong>Время отправления: </strong>
                </p>
                <p>
                    <strong>Время прибытия: </strong>
                </p>
                <br />

            </div>
        </div>
    );
}