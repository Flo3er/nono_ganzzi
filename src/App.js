import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import '../src/assets/font/notoSans.css';
import Homepage from './pages/homepage/Homepage';
import BusList from './pages/busList/BusListPage';
import MainMenu from './pages/main_menu/Main_menu';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/busList" element={<BusList />}/>
                <Route path="/mainMenu" element={<MainMenu/>}/>
            </Routes>
        </Router>
    );
};

export default App;
