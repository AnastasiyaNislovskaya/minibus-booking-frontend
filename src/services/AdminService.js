import { axiosInstance } from "./AxiosInstance";
import authHeader from "./AuthHeader";

export const AdminService = {
    getAllUsers() {
        return axiosInstance
            .get(`/admin/get_all_users`,
                { headers: authHeader() }
            );
    },

    getUserById(userId) {
        return axiosInstance
            .get(`/admin/get_by_id/${userId}`,
                { headers: authHeader() }
            );
    },

    createUser(first_name, last_name, username, email, password) {
        return axiosInstance
            .post(`/admin/create_user`,
                { first_name, last_name, username, email, password },
                { headers: authHeader() }
            );
    },

    deleteUser(userId) {
        return axiosInstance
            .delete(`/admin/delete_user/${userId}`,
                { headers: authHeader() }
            );
    }
};
