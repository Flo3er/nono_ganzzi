import React, {useState, useEffect} from 'react';
import './NoticeListItem.css';
import NoticeItems from './NoticeItems.js';
import Instance from '../../apis/NoticeAxios';

const NoticeListItem = () => {
    
    const [notice, setNotice] = useState([]);

    useEffect( ()=>{
        const NoticeData = async() => {
            try {
                const response = await Instance.get('/api/v1/notice')
                console.log(response.data);
                setNotice(response.data);
            } catch (error) {
                // console.log(error);
            }
        };
        NoticeData();
        },[]
    );

    return (
        <div className='noticeListItem'>
            <NoticeItems notice={notice} />
        </div>
    );
};

export default NoticeListItem;