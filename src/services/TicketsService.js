import { axiosInstance } from "./AxiosInstance";
import authHeader from "./AuthHeader";

export const TicketsService = {
    getAllTickets(userId) {
        return axiosInstance
            .get(`/tickets/get_all_tickets/${userId}`,
                { headers: authHeader() }
            );
    },
    deleteTicket(ticketId) {
        return axiosInstance
            .delete(`/tickets/delete_ticket/${ticketId}`,
                { headers: authHeader() }
            );
    }
};
