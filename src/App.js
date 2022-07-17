import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import API from './pages/useApi/UseApi';
import Menu1 from './pages/menu1/Menu1';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/api" element={<API/>}/>
                <Route path="/menu1" element={<Menu1/>}/>
            </Routes>
        </Router>
    );
};

export default App;
