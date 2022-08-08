// import React from 'react';
// import './NoticeItems.css';
// const NoticeItems = ({notice}) => {
//     // const onClick = () => {
//     //     let element = document.getElementById("detailTable");
//     //     let hidden = element.getAttribute("hidden");

//     //     if (hidden) {
//     //     element.removeAttribute("hidden");
//     //     } else {
//     //     element.setAttribute("hidden", "hidden");
//     //     }
//     // }

//     return (
//         <div className='App row'>
//         <h2>api 적용한 페이지</h2>
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th scope="col">공지사항 순서</th>
//                     <th scope="col">제목</th>
//                     <th scope="col">내용</th>
//                     <th scope="col">주요 공지사항 체크</th>
//                     <th scope="col">작성일</th>
//                     <th scope="col">수정일</th>
//                     <th scope="col">작성자</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {notice && notice.map((notice)=>
//                     <tr key={notice.noticeId}>
//                         <td>{notice.noticeId}</td>
//                         <td>{notice.title}</td>
//                         <td>{notice.content}</td>
//                         <td>{notice.onFocused}</td>
//                         <td>{notice.createAt}</td>
//                         <td>{notice.updateAt}</td>
//                         <td>{notice.writer}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     </div>
//     );
// };

// export default NoticeItems;

import { useEffect } from 'react';

import NoticeMethod from '../../apis/NoticeMethod';

const NoticeApiMain = () => {
    useEffect(() => {
        // Notice 조회
        const noget = NoticeMethod.NoticeGet();

        // Notice 생성
        //const nopost = NoticeMethod.NoticePost();

        // Notice 수정
        //const noput = NoticeMethod.NoticePut();
        
        // Notice 삭제
        //const nodelete = NoticeMethod.NoticeDelete();

        
        if (noget) {
            console.log('get 상태');
        } 
        // else if (nopost) {
        //     console.log('post 상태');
        // } else if (noput) {
        //     console.log('put 상태');
        // } else {
        //     console.log('delete 상태');
        // }
    }, []);
};
export default NoticeApiMain;