import {Component} from "react";
import BookingService from "../services/BookingService";

export default class BookingTicket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: "",
            trip_schedule_id: ""
        }

        this.handleBooking = this.handleBooking.bind(this);
    }

    handleBooking(e) {
        e.preventDefault();

        BookingService.bookTicket(
            this.state.user_id,
            this.state.trip_schedule_id,
        ).then(
            () => {
                alert('Билет заказан успешно!');
                this.props.history.push("/profile");
                window.location.reload();
            },
        )
    }
}