import React from 'react';
import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import Footer from '../../components/common/footer/Footer';
import HomepageBody from '../../components/body/homepageBody/HomepageBody';

const Home = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <Header />
                <HomepageBody />
            </div>
            <Footer />
        </div>
    );
};

export default Home;