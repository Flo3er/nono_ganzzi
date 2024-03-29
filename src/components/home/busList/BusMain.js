import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusList from './BusList';
import "./BusList.css";

const BusMain = () => {
    const [bus, setBus] = useState([]);

    useEffect(() => {
        axios.get('http://apis.data.go.kr/B551177/BusInformation/getBusInfo?serviceKey=jXxiNCYpEjIEE2m%2BQe81b5LAyrD7QJ5%2FsIPFUYnFpwA2Ka3WSn38o2PMrFQQDzpkDaCBy1PG0E8uTUkf1qsTdQ%3D%3D&numOfRows=15&pageNo=1&area=1&type=json')
            .then(response => {
                setBus(response.data.response.body.items);
                console.log(response.data.response.body.items);
            });
    }, []);

    return (
        <>
            <BusList bus={bus}/>
        </>
    );
}

export default BusMain;