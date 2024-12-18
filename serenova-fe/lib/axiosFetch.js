import axios from 'axios';
import cookie from "cookie-cutter";

const axiosFetch = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json'}
});

axiosFetch.interceptors.request.use(
    function(config) {
        const token = cookie.get('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)

export default axiosFetch;
