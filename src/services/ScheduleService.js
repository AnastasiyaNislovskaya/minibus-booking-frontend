import { axiosInstance } from "./AxiosInstance";

export const ScheduleService = {
    getAllTrips() {
        return axiosInstance.get(`/schedule/get_all_trips`);
    }
}
