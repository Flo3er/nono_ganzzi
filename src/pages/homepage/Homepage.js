import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
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