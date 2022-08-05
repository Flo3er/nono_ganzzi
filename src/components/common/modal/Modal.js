import React, { useRef } from 'react';

import useOutSideClick from '../../../hooks/useOutSideClick';
import ModalContainer from './ModalContainer';
import './NoticeModal.css';

const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose ?.();
  };
  
  // background 클릭 시 모달창을 닫는 기능이지만 현재 작동하지 않는다.(원인을 찾는 중)
  useOutSideClick(modalRef, handleClose);

  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto")
  // } ,[]);

  // Modal에 공통으로 사용될 레이아웃 Container 컴포넌트를 만든다. (Portal)
  // useRef를 사용해 Modal 컨테이너 요소에 담아주고 Modal 컨테이너 외부를 클릭하면 handleClose 호출 (modalRef)
  return (
    <ModalContainer>
      <div className="overlay">
        <div className="modalWrap" ref={modalRef}>
          <div className = "contents">{children}</div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;