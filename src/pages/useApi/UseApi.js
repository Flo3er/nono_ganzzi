import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
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