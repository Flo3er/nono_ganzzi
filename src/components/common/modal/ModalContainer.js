// import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';

const ModalContainer = ({ children }) => {
    return createPortal(<div>{children}</div>, document.querySelector('#modal'));
}

export default ModalContainer;

// export default function ModalPortals({ children }) {
//     const modalElement = document.querySelector("#modal");
//     return ReactDOM.createPortal(children, modalElement);
//     // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
//   }