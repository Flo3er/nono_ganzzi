import axios from 'axios';

const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJidWRkeSIsImV4cCI6MTY5MDIxMTY1MywidXNlcm5hbWUiOiJhZG1pbiJ9.J_gyUVVYCY8ckO8i6ub-BNPAV6SC0A_-XjLrCOctvCw'

const Instance = axios.create({
    baseURL: 'http://3.39.53.3:3000',
    headers:{
        'content-type':'application/json',
        Authorization:`${ACCESS_TOKEN}`,
    }
});

export default Instance;


// axios를 써서 api를 던져서 입력값을 받아오는 것
// 결과값이 들어왓을때의 정보를 (수단방법안가리고) 띄우는것까지 진행하기
// api동작하는것 ! ! ! ! ! ! !
// 글쓰기 api response값으로 요청 title, contents, 중요도 표시
// notice의 고유 id, 작성시간, .... 