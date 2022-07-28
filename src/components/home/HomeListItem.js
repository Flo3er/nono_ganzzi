import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './HomeListItem.css';
import {AiOutlineUnorderedList, AiOutlinePlus} from 'react-icons/ai';
import Modal from '../../components/common/modal/Modal';

const HomeListItem = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
// open과 close에 함수값이 포함되어있기때문에 적용이 되는 것

    return (
        <div className='listhome'>
            <div className='mainBot'>
                <ul className='mainList'>
                    <li>
                        <div className='topmenu'>
                            <h3>공지사항</h3>
                            <div className='topmenu_icon'>
                                <Link to="" className='blue'>
                                    <AiOutlineUnorderedList/>
                                </Link>
                                <button onClick={openModal} className="blue">
                                    <AiOutlinePlus className='mL10'/>
                                </button>
                                <Modal open={modalOpen} close={closeModal} />
                            </div>
                        </div>
                        <div className='infoList bR8 fs14'>
                            공지사항을 입력해주세요.
                        </div>
                    </li>
                        {/* <li>
                            <div className='topmenu'>
                                <h3>공지사항</h3>
                                <div className='topmenu_icon'>
                                    <Link to="" className='blue'>
                                        <AiOutlineUnorderedList/>
                                    </Link>
                                    <button onClick={openModal} className="blue">
                                        <AiOutlinePlus className='mL10'/>
                                    </button>
                                    <Modal open={modalOpen} close={closeModal} />
                                </div>
                            </div>
                            <div className='infoList bR8 fs14'>
                                공지사항
                            </div>
                        </li> */}
                    </ul>
                </div>
        </div>
    );
};

export default HomeListItem;