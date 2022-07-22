import React from 'react';
import Sidebar from '../../components/common/sidebar/Sidebar';
import Footer from '../../components/common/footer/Footer';
import ApiBody from '../../components/body/apiBody/ApiBody.js';

const API = () => {

    return (
        <div>
            <Sidebar />
            <div>
                <ApiBody />
            </div>
            <Footer />
        </div>
    );
};

export default API;