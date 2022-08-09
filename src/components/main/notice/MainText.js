import React from 'react';
// import Toastify from '../../common/toast/Toastify';
import ModalButton from '../../common/modal/ModalButton'
import './MainText.css';
import {Link} from 'react-router-dom';

import { FiList,  FiEdit} from "react-icons/fi";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NoticeModal from '../../common/modal/NoticeModal'

function MainText () {
    const inputData = useSelector(state => state.board.inputData)
    const lastId = useSelector(state => state.board.lastId) 
    const [isOpen1, setIsOpen1] = useState(false);

    // notice 모달 전달 true = 모달open
    const onClickButton1 = () => {
        setIsOpen1(true);
    };

    const noticeUpdate = () => {
        if(lastId !== 0){
            return(
                inputData.map(rowData => (
                    rowData.id !== '' &&
                    <li>
                        <div className='topmenu'>
                            <h3>공지사항</h3>
                            <div className='topmenu_icon'>
                                <Link to='/noticeList' className='btnList' />
                                {/* <ModalButton /> */}
                                <FiEdit className='emo' onClick={onClickButton1}/>
                                {isOpen1 && (
                                    <NoticeModal
                                    onClose={()=>{
                                        setIsOpen1(false);
                                    }}
                                />)}
                            </div>
                        </div>
                        <div className='infoList bR8 fs14 back-secondary texthint'>
                            <p>{rowData.title}</p>
                            <p>{rowData.content}</p>
                        </div>
                    </li>
                ))
            )
        }
    }

    // const toastText = 'sample text';
    // Toastify.js로 text값 전달
    return (
        <div className='listhome'>
            {/* <Toastify text={toastText}/> */}
            <div className='mainBot'>
                <ul className='mainList'>
                    <li>
                        <div className='topmenu'>
                            <h3>공지사항</h3>
                            <div className='topmenu_icon'>
                                <Link to='/noticeList' className='btnList' />
                                <FiEdit className='emo' onClick={onClickButton1}/>
                                {isOpen1 && (
                                    <NoticeModal
                                    onClose={()=>{
                                        setIsOpen1(false);
                                    }}
                                />)}
                            </div>
                        </div>
                        <div className='infoList bR8 fs14 back-secondary texthint'>
                            <p>
                                {'공지사항 제목입니다.'}
                                <br />
                                {'공지사항 내용입니다.'}
                            </p>
                        </div>
                    </li>
                    {noticeUpdate()}
                </ul>
            </div>
        </div>
    );
};

export default MainText;