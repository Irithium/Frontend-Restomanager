import axios from "axios";
import useAuthStore from "../store/authStore";

const axiosConfig = axios.create({
    baseURL: 'https://restomanager.onrender.com',
    headers: { 'Content-Type': 'application/json' }
});

axiosConfig.interceptors.request.use(
    (config) => {
        const { auth } = useAuthStore.getState();
        if (auth?.accessToken) {
            config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosConfig;