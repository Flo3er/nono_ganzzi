import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://apis.data.go.kr',
    timeout: 1000,
});

export default Instance;

