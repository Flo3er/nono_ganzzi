import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import NoticeApiBody from '../../components/main/noticeApi/NoticeApiBody';


const NoticePage = () => {
    return (
        <div>
            <Header />
            <div className = "container">
                <Sidebar />
                <NoticeApiBody />
            </div>
        </div>
    )
}

export default NoticePage;
