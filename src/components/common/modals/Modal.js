import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import './Modal.css';

const Modal = (props) => {

    const {open, close} = props;

    const [infoValue, setInfoValue] = useState('');

    const [isActive, setActive] = useState('false');

    const onTitleChange = (event) => {
        const {name, value} = event.target;
        setInfoValue({
            ...infoValue,
            [name]:value
        })
    };
    const onContentChange = (event) => {
        const {name, value} = event.target;
        setInfoValue({
            ...infoValue,
            [name]:value
        })
    };
    console.log(infoValue);

    const toggleClass = () => {
        setActive(!isActive);
        console.log('클릭')
    }

    function boardForm_check(){
        var title = document.getElementById('title');
        var content = document.getElementById('content');
        if(title.value === ''){
            alert('제목을 입력하세요.');
            title.focus();
            return false;
        };
        if (content.value === ''){
            alert('내용을 입력하세요.');
            content.focus();
            return false;
        }
    }

    return ( 
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
                <form>
                    <header>
                        <input 
                            type='text'
                            placeholder='제목을 입력하세요' 
                            name="title"
                            onChange={onTitleChange} 
                            id='title'
                        />
                        <button className="close" onClick={close}>
                            <AiOutlineClose />
                        </button>
                    </header>
                    <main>
                        <textarea 
                            placeholder='내용을 입력하세요 ' 
                            className='bR8' 
                            onChange={onContentChange}
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
                            onClick={boardForm_check}
                            type='button'
                        >
                            저장하기
                        </button>
                    </footer>
                </form>
            </section>
            ) : null}
        </div>
    );
};

export default Modal;