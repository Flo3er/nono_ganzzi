import React from 'react';
import { createPortal } from 'react-dom';

// Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드 로 자식을 렌더링 하는 방법
// Portal을 사용하는 이유는 DOM Tree 상에서 부모-자식 같의 제약에서 자유로워지기 위해 Portal 기능을 사용하게 된다.

// Portal을 통해 #modal에 child 컴포넌트를 렌더링 해주는 Container 컴포넌트를 만든다.
const ModalContainer = ({ children }) => {
    return createPortal(<>{children}</>, document.getElementById('modal'));
}

export default ModalContainer;