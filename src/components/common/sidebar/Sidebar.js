import React, {useState} from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {CgHome} from 'react-icons/cg';
import {BiBox, BiFile} from 'react-icons/bi';
import {AiOutlineSetting} from 'react-icons/ai';

const Sidebar = () => {

    return(
        <div className='sidebar'>
            <div className='head'>
                {/* 사이즈 현재 안맞아서 이미지 받고 수정 필요함 */}
                <h1>
                    <Link to="/">
                        <img src="./dsd.jpg" alt="로고"></img>
                        <div className='title'>
                            <h2>화성시니어클럽</h2>
                            <p className='fs14'>노노유통</p>
                        </div>
                    </Link>
                </h1>
                <div className='userinfo'>
                    <h3>OOO님(작업)</h3>
                    <Link to="" className='bR8'>
                        마이페이지
                    </Link>
                </div>
                <div className='mainNav'>
                    <ul className='depth1'>
                        <li className='depthLi'>
                            <Link to="/menu1" className='liA'>
                                <CgHome className='emo' />
                                <p className='liP'>메인 페이지</p>
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
                                <BiBox className='emo' />
                                <p className='liP'>물품 관리</p>
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
                                <BiFile className='emo' />
                                <p className='liP'>문서 관리</p>
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
                                <AiOutlineSetting className='emo' />
                                <p className='liP'>관리자 설정</p>
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