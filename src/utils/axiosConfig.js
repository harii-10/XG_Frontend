import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://xg-backend.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://xen-guard-frontend.vercel.app'
    }
});

export default axiosInstance; 