import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import NoticeBody from '../../components/noticeList/NoticeListBody';


const HomePage = () => {
    return (
        <div>
            <Header />
            <div className = "container">
                <Sidebar />
                <NoticeBody />
            </div>
        </div>
    )
}

export default HomePage;
