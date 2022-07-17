import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ApiBody.css';

const ApiBody = () => {

    const [bus, setBus] = useState([]);
    const [moreBus, setMoreBus] = useState([]);

    const moreList = (index) => {
        const data = bus[index]
        setMoreBus(data)
        console.log(data)

        bus.map((busInfo, index)=>
            <div>
                <tr key={index}>
                    <td>{busInfo.area}</td>
                    <td>{busInfo.busnumber}</td>
                    <td>{busInfo.toawfirst}</td>
                    <td>{busInfo.toawlast}</td>
                    <td>{busInfo.adultfare}</td>
                    <td>{busInfo.busclass}</td>
                    <td>{busInfo.capname}</td>
                    <td><button>닫기</button></td>
                </tr>
            </div>)
    }

    const bus_list = bus.map((busInfo, index)=>
        <tbody>
            <tr key={index}>
                <td>{busInfo.area}</td>
                <td>{busInfo.busnumber}</td>
                <td>{busInfo.toawfirst}</td>
                <td>{busInfo.toawlast}</td>
                <td>
                    <button onClick={()=>moreList(index)}>더보기</button>
                </td>
            </tr>
        </tbody>
    )

    useEffect(
        ()=>{
            axios.get(`https://apis.data.go.kr/B551177/BusInformation/getBusInfo?serviceKey=RWctpfw6RuG2ATd0i8BoywdmvaUncsusXm%2FPAzGmrp22Hthq1JpM9du4g713Q0PF5Wg3JSVJ0filuBc3KNL5Ww%3D%3D&numOfRows=10&pageNo=1&area=1&type=json`)
            .then(response => {
                setBus(response.data.response.body.items);
                console.log(response.data.response.body.items);
            });
        },[]
    )
    

    return (
        <div className='row apibody'>
            <h2>api 적용한 페이지</h2>
            <table className='show'>
                <thead>
                    <tr>
                        <th>버스지역</th>
                        <th>버스번호</th>
                        <th>공항행첫차</th>
                        <th>공항행막차</th>
                        <th>더보기</th>
                    </tr>
                </thead>
                {bus_list}
            </table>
            
            {/* 더보기 버튼 누를 시 해당 데이터 세부내용 확인 가능 */}
            <table style={{marginTop:'50px'}}>
                <tbody>
                    <tr>
                        <td>{moreBus.area}</td>
                    </tr>
                    <tr>
                        <td>{moreBus.cpname}</td>
                    </tr>
                    <tr>
                        <td>{moreBus.routeinfo ? moreBus.routeinfo : '정보가 없습니다.'}</td>
                    </tr>
                    <tr>
                        <td>{moreBus.t1wayt ? moreBus.t1wayt : '정보가 없습니다.'}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ApiBody;