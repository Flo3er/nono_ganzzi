import React, {useState} from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {AiFillAliwangwang} from 'react-icons/ai';

const Sidebar = () => {

    return(
        <div className='sidebar'>
            <div className='head'>
                <h1><Link to="/">Logo</Link></h1>
                <h3>userinfo</h3>
                <div className='mainNav'>
                    <ul className='depth1'>
                        <li className='depthLi'>
                            <Link to="/menu1" className='liA'>
                                <AiFillAliwangwang className='emo' />
                                <p className='liP'>메뉴1 - api연동페이지</p>
                            </Link>
                            <ul className='depth2'>
                                <li><Link to="/api">연동 페이지</Link></li>
                                <li><Link to="">상세메뉴2</Link></li>
                                <li><Link to="">상세메뉴3</Link></li>
                                <li><Link to="">상세메뉴4</Link></li>
                                <li><Link to="">상세메뉴5</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className='liA'>
                                <AiFillAliwangwang className='emo' />
                                <p className='liP'>메뉴2</p>
                            </Link>
                            <ul className='depth2'>
                                <li><Link to="">상세메뉴1</Link></li>
                                <li><Link to="">상세메뉴2</Link></li>
                                <li><Link to="">상세메뉴3</Link></li>
                                <li><Link to="">상세메뉴4</Link></li>
                                <li><Link to="">상세메뉴5</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className='liA'>
                                <AiFillAliwangwang className='emo' />
                                <p className='liP'>메뉴3</p>
                            </Link>
                            <ul className='depth2'>
                                <li><Link to="">상세메뉴1</Link></li>
                                <li><Link to="">상세메뉴2</Link></li>
                                <li><Link to="">상세메뉴3</Link></li>
                                <li><Link to="">상세메뉴4</Link></li>
                                <li><Link to="">상세메뉴5</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className='liA'>
                                <AiFillAliwangwang className='emo' />
                                <p className='liP'>메뉴4</p>
                            </Link>
                            <ul className='depth2'>
                                <li><Link to="">상세메뉴1</Link></li>
                                <li><Link to="">상세메뉴2</Link></li>
                                <li><Link to="">상세메뉴3</Link></li>
                                <li><Link to="">상세메뉴4</Link></li>
                                <li><Link to="">상세메뉴5</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;