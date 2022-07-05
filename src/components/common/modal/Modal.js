// import ReactModal from 'react-modal';

// const MyModal = ({ isOpen }) => {
//   return (
//     <ReactModal isOpen={isOpen}>
//       <div>모달 입니다.</div>
//     </ReactModal>
//   );
// };

// export default MyModal;

import React from 'react'
import './Modal.css'

const Modal = ({modalClose}) => {

  const onCloseModal = (e) => {
      console.log('e.target: ', e.target)
      console.log('e.tarcurrentTargetget: ', e.currentTarget)
      if(e.target === e.currentTarget){
          modalClose()
      }

  }
  return (
      <div className="modal__container" onClick={onCloseModal}>
          <div className="modal">
            <p>success</p>
            <p>success</p>
            <p>success</p>
            <p>success</p>
            <p>success</p>
            <p>success</p>
            <button className="modal__button" onClick={modalClose}> Modal Close</button>
          </div>
      </div>
  )
}

export default Modal;