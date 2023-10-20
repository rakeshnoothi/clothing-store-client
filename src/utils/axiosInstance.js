import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
    },
});

export default axiosInstance;
