import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/main/MainPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
