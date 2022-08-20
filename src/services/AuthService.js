import axiosInstance from "../utils/http-common";

class AuthService {
    login(username, password) {
        return axiosInstance
            .post(`/auth/signin`, { username, password })
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data));
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(first_name, last_name, username, email, password) {
        return axiosInstance
            .post(`/auth/signup`, { first_name, last_name, username, email, password });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();