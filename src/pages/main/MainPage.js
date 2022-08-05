import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import Notice from '../../components/main/notice/Notice';

const Home = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <Header />
                <Notice />
            </div>
        </div>
    );
};

export default Home;