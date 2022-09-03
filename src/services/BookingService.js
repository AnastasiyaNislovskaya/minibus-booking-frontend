import { axiosInstance } from "./common/axiosInstance";
import authHeader from "./common/authHeader";

export const BookingService = {
    bookTicket(userId, tripId) {
        return axiosInstance.post(`/booking/book_ticket`, null,
            {
                params: {
                    user_id: userId,
                    trip_schedule_id: tripId
                },
                headers: authHeader()
            }
        );
    }
};
