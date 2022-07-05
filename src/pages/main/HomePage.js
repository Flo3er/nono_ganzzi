import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import HomeBody from '../../components/home/main/HomeBody';


const HomePage = () => {
    return (
        <div>
            <Header />
            <div className = "container">
                <Sidebar />
                <HomeBody />
            </div>
        </div>
    )
}

export default HomePage;
