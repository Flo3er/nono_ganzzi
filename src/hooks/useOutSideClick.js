import { useEffect } from 'react';

const useOutSideClick = (ref, callback) => {
    useEffect(() => {
        const handleClick = (event) => {
            // ref로 지정한 요소의 밖을 클릭 시 callback함수를 싱행시킴.
            if(ref.current && !ref.current.contains(event.target)) {
                callback?.();
            }
        };

        window.addEventListener('mousedown', handleClick);

        return () => window.removeEventListener('mousedown', handleClick);
    }, [ref, callback]);
}

export default useOutSideClick;