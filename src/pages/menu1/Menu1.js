import React from 'react';
import Sidebar from '../../components/common/sidebar/Sidebar';
import Footer from '../../components/common/footer/Footer';
import MenuBody from '../../components/body/menu1/Menu1Body';

const Menu = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <MenuBody />
            </div>
            <Footer />
        </div>
    );
};

export default Menu;