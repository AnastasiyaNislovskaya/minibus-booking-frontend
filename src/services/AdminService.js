import { axiosInstance } from "./AxiosInstance";
import authHeader from "./AuthHeader";

export const AdminService = {
    getAllUsers() {
        return axiosInstance.get(`/admin/get_all_users`, { headers: authHeader() });
    },

    getUserById(userId) {
        return axiosInstance.get(`/admin/get_by_id/${userId}`, { headers: authHeader() });
    },

    createUser(user) {
        return axiosInstance.post(`/admin/create_user`, user, { headers: authHeader() });
    },

    updateUser(userId, user) {
        return axiosInstance.put(`/admin/update_user/${userId}`, user, { headers: authHeader() });
    },

    deleteUser(userId) {
        return axiosInstance.delete(`/admin/delete_user/${userId}`, { headers: authHeader() });
    }
};
