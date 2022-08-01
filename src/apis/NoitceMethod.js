import Instance from './AxiosInstance';

// Notice 생성
const NoticePost = async() => {
    try {
        const response = await Instance.post('/api/v1/notice',{
            title: 'sampleNoice',
            content: '샘플용',
            onFocused: false
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// Notice 조회
const NoticeGet = async() => {
    try {
        const response = await Instance.get('/api/v1/notice');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// Notice 수정
const NoticePut = async() => {
    try {
        const response = await Instance.put('/api/v1/notice',{
            title: 'sampleNoice',
            content: '이건 샘플입니다',
            onFocused: false
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// Notice 삭제
const NoticeDelete = async() => {
    try {
        const response = await Instance.delete('/api/v1/notice', {
            noticeId: 16
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

const NoticeMethod = {
    NoticePost,
    NoticeGet,
    NoticePut,
    NoticeDelete
}

export default NoticeMethod;



// import Instance from './AxiosInstance';

// const NoticeGet = () => {
//     const noticeApi = async() => {
//         try {
//             const response = await Instance.get('/api/v1/notice');
//             console.log(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return noticeApi();
// }

// export default NoticeGet;