import axios from 'axios';

const streams = axios.create({
    baseURL : "http://localhost:7000"
})

export default streams;