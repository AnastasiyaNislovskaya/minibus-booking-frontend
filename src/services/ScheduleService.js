import axios from 'axios';

const API_URL = "http://localhost:8080/schedule";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

class ScheduleService {
    getAllTrips() {
        return axiosInstance.get(`/get_all_trips`);
    }
}

export default new ScheduleService();