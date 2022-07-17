import React from 'react';

import Toastify from '../../common/toast/Toastify';
import ModalButton from '../../common/modal/ModalButton'
import './SampleText.css';


const SampleText = () => {
    return (
        <div className='listApi'>
            <p>여기 보여줘어어억</p>
            <Toastify />
            <ModalButton />
        </div>
    );
};

export default SampleText;