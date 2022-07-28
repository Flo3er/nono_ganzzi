import React from 'react';
import './NoticeItems.css';

const NoticeItems = ({notice}) => {

    // const onClick = () => {
    //     let element = document.getElementById("detailTable");
    //     let hidden = element.getAttribute("hidden");

    //     if (hidden) {
    //     element.removeAttribute("hidden");
    //     } else {
    //     element.setAttribute("hidden", "hidden");
    //     }
    // }

    return (
        <div className='App row'>
        <h2>api 적용한 페이지</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">공지사항 순서</th>
                    <th scope="col">제목</th>
                    <th scope="col">내용</th>
                    <th scope="col">주요 공지사항 체크</th>
                    <th scope="col">작성일</th>
                    <th scope="col">수정일</th>
                    <th scope="col">작성자</th>
                </tr>
            </thead>
            <tbody>
                {notice && notice.map((notice)=>
                    <tr key={notice.noticeId}>
                        <td>{notice.noticeId}</td>
                        <td>{notice.title}</td>
                        <td>{notice.content}</td>
                        <td>{notice.onFocused}</td>
                        <td>{notice.createAt}</td>
                        <td>{notice.updateAt}</td>
                        <td>{notice.writer}</td>
                            {/* <button type='button' onClick={onClick}>더보기</button>
                            <div>     
                                <table id = "detailTable" hidden = "hidden">
                                    <thead>
                                        <tr>
                                            <th scope="col">공지사항 순서</th>
                                            <th scope="col">제목</th>
                                            <th scope="col">내용</th>
                                            <th scope="col">주요 공지사항 체크</th>
                                            <th scope="col">만든 날짜</th>
                                            <th scope="col">업데이트 날짜</th>
                                            <th scope="col">작성자</th>
                                        </tr>
                                    </thead>
                                    <tbody>  
                                        <tr key={bus.area}>
                                            <td>{bus.t1endfirst}</td>
                                            <td>{bus.t1endlast}</td>
                                            <td>{bus.t2endfirst}</td>
                                            <td>{bus.t2endlast}</td>
                                            <td>{bus.t1wdayt}</td>
                                            <td>{bus.t1wt}</td>
                                            <td>{bus.t2wdayt}</td>
                                            <td>{bus.t2wt}</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div> */}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
};

export default NoticeItems;