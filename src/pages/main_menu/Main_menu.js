import React from 'react';
import Sidebar from '../../components/common/sidebar/Sidebar';
import Footer from '../../components/common/footer/Footer';
import MainMenuBody from '../../components/main_menu/MainmenuBody';

const Menu = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <MainMenuBody />
            </div>
            <Footer />
        </div>
    );
};

export default Menu;