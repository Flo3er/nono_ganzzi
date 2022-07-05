// import React, { useState } from 'react';
// import Modal from './Modal';

// const ModalButton = () => {
//     const [isOpen, setOpen] = useState(false);
//     const handleClick = () => {
//         setOpen(true);
//     };

//   return (
//     <div className="App">
//       <button onClick={handleClick}>모달 열기</button>
//       <Modal isOpen={isOpen}
//       onRequestClose={onModalClose} />
//     </div>
//   );
// };

// export default ModalButton;

import React, { useState } from 'react'
import Modal from './Modal'


const ModalButton = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)

    }

    return (
        <>
        <button onClick={modalClose}>Modal</button>
        { modalOpen && <Modal modalClose={modalClose}></Modal>}
        </>

    )
}

export default ModalButton;