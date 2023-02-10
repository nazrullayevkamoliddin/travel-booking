import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7777'
})

export default instance;