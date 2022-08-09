import React, { useEffect, useState } from 'react';
import './NoticeListBody.css';
import {NoticeMethod} from '../../apis/NoitceMethod';
// import ViewList from './ViewList.js';

const NoticeListBody = () => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        let get = NoticeMethod.NoticeGet();
        console.log(get)
        let getData = () => {
            get.then((data)=>{
                setList(data)
            })
        }
        getData()
    }, []);

    return (
        <div className='noticeListBody'>
            <div className='full-list'>
                <ul className='depth1'>
                {list && list.map((list)=>
                    <li className='depth1Li'>
                        <div className='list-left'>
                            <p>{list.title}</p>
                        </div>
                        <div className='list-right fs10 primaryDark'>
                            <p>{list.write}</p>
                            <p>{list.createAt}</p>
                        </div>
                    </li>
                )}
                </ul>
            </div>
            <div className='choice-notice'>
                <p>선택한것</p>
            </div>
            {/* <ViewList list={list} /> */}
            
            {/* 
            <div key={list.noticeId}>
                <p>{list.noticeId}</p>
                <p>{list.title}</p>
            </div>
        
            )} */}
        </div>
    );
};

export default NoticeListBody;