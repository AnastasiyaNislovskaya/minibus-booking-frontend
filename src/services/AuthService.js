import axios from 'axios';

const API_URL = "http://localhost:8080/auth";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

class AuthService {
    login(username, password) {
        return axiosInstance.post(`/signin`, {
            username, password
        }).then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(first_name, last_name, username, email, password) {
        return axiosInstance.post(`/signup`, {
            first_name, last_name, username, email, password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();