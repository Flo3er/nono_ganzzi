import React from 'react';
import {Link} from 'react-router-dom';
import './Menu1Body.css';

const Menu1Body = () => {
    return (
        <div className='menu1 row'>
            <h2>메뉴1</h2>
            <ul className='depth2_D'>
                <li>
                    <Link to="/api">상세메뉴1-연동 페이지</Link>
                </li>
                <li>
                    <Link to="">상세메뉴2</Link>
                </li>
                <li>
                    <Link to="">상세메뉴3</Link>
                </li>
                <li>
                    <Link to="">상세메뉴4</Link>
                </li>
                <li>
                    <Link to="">상세메뉴5</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu1Body;