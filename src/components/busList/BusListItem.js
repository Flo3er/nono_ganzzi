import React, {useState, useEffect} from 'react';
import './BusListItem.css';
import BusItems from './BusItems.js';
import Instance from '../../apis/BusAxios';

const BusListItem = () => {
    
    const [bus, setBus] = useState([]);

    useEffect( ()=>{
        const BusData = async() => {
            try {
                const response = await Instance.get('/api/v1/notice')
                console.log(response);
                setBus(response.data.response.body.items);
            } catch (error) {
                console.log(error);
            }
        };
        BusData();
        },[]
    );

    return (
        <div className='busListItem'>
            <BusItems bus={bus} />
        </div>
    );
};

export default BusListItem;