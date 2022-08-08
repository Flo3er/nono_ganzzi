import React, {useRef, useState} from 'react';
import './Modal.css';
import {AiOutlineClose} from 'react-icons/ai';

import useOutSideClick from '../../../hooks/useOutSideClick';
import ModalContainer from './ModalContainer';
import './Modal.css';

// export default function Modal({ show, handleModalShow}) {
const Modal = ({show, handleModalShow}) => {

    const [infoValue, setInfoValue] = useState('');
    const [isActive, setActive] = useState('false');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handle = () => {
        localStorage.setItem('title', title)
        localStorage.setItem('content', content)
    }

    // 입력한 title 값 추출하기
    // const onTitleChange = (event) => {
    //     const {name, value} = event.target;
    //     setInfoValue({
    //         ...infoValue,
    //         [name]:value
    //     })
    // };
    // 입력한 content 값 추출하기
    // const onContentChange = (event) => {
    //     const {name, value} = event.target;
    //     setInfoValue({
    //         ...infoValue,
    //         [name]:value
    //     })
    // };
    // console.log(infoValue);
    // 주요 공지사항 체크 여부 확인하기
    const toggleClass = () => {
        setActive(!isActive);
        console.log('클릭')
    }
    
    // title, content 값 입력없을 시 경고창 (toast 창 뜨는걸로 변경해야함!)
    // function boardForm_check(){
    //     var title = infoValue.title;
    //     var content = infoValue.content;
    //     if(title.value === ''){
    //         alert('제목을 입력하세요.');
    //         content.focus();
    //         return false;
    //     } else if (content.value === ''){
    //         alert('내용을 입력하세요.');
    //         content.focus();
    //         return false;
    //     } else {
    //         alert(`
    //             작성한 내용 뽑아내기
    //             제목:${title}, 내용:${content}
    //         `);
    //         window.localStorage.setItem('title',title)
    //         window.localStorage.setItem('content',content)
    //         const titlet = window.localStorage.getItem('title');
    //         const contentt = window.localStorage.getItem('content');
    //         document.write(titlet, contentt)
    //     }
    //     // if값을 다 피해갔을 때 event를 정해야댐 (여기서 submit으로 보내주도록 변경해야함!)
    // }

    return (
    <div className={"modal-wrap " + (show ? "active" : "")}>
        <section className="overlay">
            <form>
                <header>
                    <input 
                        type='text'
                        placeholder='제목을 입력하세요' 
                        name="title"
                        onChange={e=>setTitle(e.target.value)}
                        id='title'
                    />
                    <button 
                        className="close"
                        type="button"
                        onClick={() => {
                            handleModalShow(false);
                    }}>
                        <AiOutlineClose />
                    </button>
                </header>
                <main>
                    <textarea 
                        placeholder='내용을 입력하세요 ' 
                        className='bR8' 
                        onChange={e=>setContent(e.target.value)}
                        name="content"
                        id='content'
                    />
                </main>
                <footer>
                    <div className='checking'>
                        <button 
                            type='button'
                            className={isActive ? 'btn' : 'btn_on'}
                            onClick={toggleClass}
                        />
                        <p className='mL10 fs14'>주요 공지사항</p>
                    </div>
                    <button 
                        className="close bR8 back-blue"
                        onClick={handle}
                        type='submit'
                    >
                        저장하기
                    </button>
                </footer>
            </form>
        </section>
        </div>
    );
};

export default Modal;