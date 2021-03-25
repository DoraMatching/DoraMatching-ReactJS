import axios from 'axios';
import config from '../../services/Config';

const api = axios.create({
    baseURL: `${config.API_URL}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;
