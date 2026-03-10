import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

// Interceptor: Agar login ke baad token bhejna ho
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;