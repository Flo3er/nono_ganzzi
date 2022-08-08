import Instance from './NoticeInstance';

// POST 생성
const NoticePost = async() => {
    try {
        const response = await Instance.post('/api/v1/notice', {
            title:'sampleNotice',
            content:'ㄱㄴ',
            onFocused:false
        });
        console.log(response.data);
    } catch(error) {
        console.log(error);
    }
};

// GET 조회
const NoticeGet = async() => {
    try{
        const response = await Instance.get('/api/v1/notice');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// PUT 수정
const NoticePut = async() => {
    try {
        // const response = await Instance.put(`/api/v1/notice/${number}`,{
        const response = await Instance.put(`/api/v1/notice/28`,{
            title: 'sampleNoice',
            content: '이건 샘플입니다',
            onFocused: false
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// 삭제 DELETE
const NoticeDelete = async() => {
    try {
        // const response = await Instance.delete(`/api/v1/notice/${number}`, {
        const response = await Instance.delete(`/api/v1/notice/31`, {
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

// 하나로 통합
const NoticeMethod = {
    NoticePost,
    NoticeGet,
    NoticePut,
    NoticeDelete
}

export default NoticeMethod;