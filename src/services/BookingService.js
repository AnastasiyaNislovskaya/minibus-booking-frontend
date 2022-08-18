import axios from 'axios';

const API_URL = "http://localhost:8080/booking";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

class BookingService {
    bookTicket(userId, tripId) {
        return axiosInstance.post(`/book_ticket`, null, {
            params: {
                user_id: userId,
                trip_schedule_id: tripId
            }
        });
    }
}

export default new BookingService();