import Axios from "axios";

const api = Axios.create({
    baseURL: 'https://api.dev.doramatching.tk',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;