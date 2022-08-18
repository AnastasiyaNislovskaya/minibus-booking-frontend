import axios from 'axios';

const API_URL = "http://localhost:8080/admin";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

class AdminService {
    getAllUsers() {
        return axiosInstance.get(`/get_all_users`);
    }

    deleteUser(user_id) {
        return axiosInstance.delete(`/delete_user/${user_id}`);
    }

    createUser(first_name, last_name, username, email, password) {
        return axios.post(API_URL + `/create_user`, {
            first_name, last_name, username, email, password
        });
    }
}

export default new AdminService();