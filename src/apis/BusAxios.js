import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://3.39.53.3:3000',
    header:{
        'content-type':'application/json',
        port:3000,
        Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJidWRkeSIsImV4cCI6MTY1ODgzOTQzNywidXNlcm5hbWUiOiJhZG1pbiJ9.UQZATEnP2iwjAQG2wEmOuL9V-oIb0VwxPhhe49DyBlM',
    },
    type:'post',
    dataType:'json',
});

export default Instance;