import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import BusBody from '../../components/home/busList/BusBody';


const HomePage = () => {
    return (
        <div>
            <Header />
            <div className = "container">
                <Sidebar />
                <BusBody />
            </div>
        </div>
    )
}

export default HomePage;
