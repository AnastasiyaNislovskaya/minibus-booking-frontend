import { axiosInstance } from "./common/axiosInstance";

export const ScheduleService = {
    getAllTrips() {
        return axiosInstance.get(`/schedule/get_all_trips`);
    },

    getTrips(departure, arrival, tripDate) {
        return axiosInstance.get(`/schedule/get_trips_by_params/${departure}/${arrival}/${tripDate}`);
    }
};
