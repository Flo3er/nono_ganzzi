import React from 'react';

const BusList = ({ bus }) => {
    // const [detail, setDetail] = useState('');

    const onClick = () => {
        let element = document.getElementById("detailTable");
        let hidden = element.getAttribute("hidden");
        // const table = document.getElementsByClassName('table');
        // const newRow = table.insertRow();
        // const newCell1 = newRow.insertCell(0);
        // const newCell2 = newRow.insertCell(0);

        // newCell1.innerText = '새 과일';
        // newCell2.innerText = 'new apple';

        if (hidden) {
        element.removeAttribute("hidden");
        } else {
        element.setAttribute("hidden", "hidden");
    }
  }

    return (
        <div className="App">
            <h1>Airport Bus</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">버스번호</th>
                        <th scope="col">성인요금</th>
                        <th scope="col">버스등급</th>
                        <th scope="col">운수사</th>
                        <th scope="col">공항행 첫차</th>
                        <th scope="col">공항행 막차</th>
                        <th scope="col">기타</th>
                    </tr>
                </thead>
                <tbody>
                    {bus && bus.map((bus) =>   
                        <tr key={bus.area}>
                            <td>{bus.busnumber}</td>
                            <td>{bus.adultfare}</td>
                            <td>{bus.busclass}</td>
                            <td>{bus.cpname}</td>
                            <td>{bus.toawfirst}</td>
                            <td>{bus.toawlast}</td>
                            <td>
                                <button type='button' onClick={onClick}>더보기</button>
                                <div>     
                                   <table id = "detailTable" hidden = "hidden">
                                       <thead>
                                           <tr>
                                           <th scope="col">T1종점행 첫차</th>
                                           <th scope="col">T1종점행 막차</th>
                                           <th scope="col">T2종점행 첫차</th>
                                           <th scope="col">T2종점행 막차</th>
                                           <th scope="col">T1 평일시간표</th>
                                           <th scope="col">T1 주말시간표</th>
                                           <th scope="col">T2 평일시간표</th>
                                           <th scope="col">T2 주말시간표</th>
                                           </tr>
                                       </thead>
                                       <tbody>  
                                           <tr key={bus.area}>
                                               <td>{bus.t1endfirst}</td>
                                               <td>{bus.t1endlast}</td>
                                               <td>{bus.t2endfirst}</td>
                                               <td>{bus.t2endlast}</td>
                                               <td>{bus.t1wdayt}</td>
                                               <td>{bus.t1wt}</td>
                                               <td>{bus.t2wdayt}</td>
                                               <td>{bus.t2wt}</td>
                                            </tr>
                                       </tbody>
                                   </table>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  );
}

export default BusList;

