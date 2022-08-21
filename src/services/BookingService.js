import { axiosInstance } from "./AxiosInstance";

export const BookingService = {
    bookTicket(userId, tripId) {
        return axiosInstance.post(`/booking/book_ticket`, null, {
            params: {
                user_id: userId,
                trip_schedule_id: tripId
            }
        });
    }
};
