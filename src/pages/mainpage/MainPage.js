import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import MainBody from '../../components/main/notice/MainBody';

const SamplePage = () => {
    return (
        <div>
            <Header />
                <div className='container row'>
                    <Sidebar />
                    <MainBody />
                </div>
        </div>
    )
}


export default SamplePage;