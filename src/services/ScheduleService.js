import axiosInstance from "../utils/http-common";

class ScheduleService {
    getAllTrips() {
        return axiosInstance.get(`/schedule/get_all_trips`);
    }
}

export default new ScheduleService();