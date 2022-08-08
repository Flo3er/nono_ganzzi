import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import BusList from './pages/noticeList/NoticeListPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/busList" element={<BusList />}/>
            </Routes>
        </Router>
    );
};

export default App;
