import React, {useState} from 'react';
import './Modal.css';
import {AiOutlineClose} from 'react-icons/ai';

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
            content.focus();
            return false;
        } else if (content.value === ''){
            alert('내용을 입력하세요.');
            content.focus();
            return false;
        } else {
            alert(`
                작성한 내용 뽑아내기
                제목:${infoValue.title}, 내용:${infoValue.content}
            `);
        }
    }
// if값을 다 피해갔을 때 event를 정해야댐

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
                        type='submit'
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