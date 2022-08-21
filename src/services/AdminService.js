import { axiosInstance } from "./AxiosInstance";

export const AdminService = {
    getAllUsers() {
        return axiosInstance.get(`/admin/get_all_users`);
    },

    getUserById(userId) {
        return axiosInstance.get(`/admin/get_by_id/${userId}`);
    },

    createUser(user) {
        return axiosInstance.post(`/admin/create_user`, user);
    },

    updateUser(userId, user) {
        return axiosInstance.put(`/admin/update_user/${userId}`, user);
    },

    deleteUser(userId) {
        return axiosInstance.delete(`/admin/delete_user/${userId}`);
    }
};
