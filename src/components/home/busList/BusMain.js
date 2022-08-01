
// 수정, 삭제가 안됨
import { useEffect } from 'react';

import NoticeMethod from '../../../apis/NoitceMethod';

const BusMain = () => {
    useEffect(() => {
        // NoticeMethod.NoticePost();
        NoticeMethod.NoticeGet();
        // NoticeMethod.NoticePut();
        // NoticeMethod.NoticeDelete();
    }, []);

};
export default BusMain;





// import React, { useState, useEffect } from 'react';

// import Instance from '../../../apis/BusAxios';
// import BusList from './BusList';
// import "./BusList.css";

// const BusMain = () => {
//     const [bus, setBus] = useState([]);

//     useEffect(() => {
//         const BusData = async() => {
//             try {
//                 const response = await Instance.get("/B551177/BusInformation/getBusInfo?serviceKey=jXxiNCYpEjIEE2m%2BQe81b5LAyrD7QJ5%2FsIPFUYnFpwA2Ka3WSn38o2PMrFQQDzpkDaCBy1PG0E8uTUkf1qsTdQ%3D%3D&numOfRows=15&pageNo=1&area=1&type=json");
//                 console.log(response.data.response.body.items);
//                 setBus(response.data.response.body.items);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         BusData();
//     }, []);

//     return (
//         <>
//             <BusList bus={bus}/>
//         </>
//     );
// }

// export default BusMain;







// import { useEffect } from 'react';
// import axios from 'axios';

// const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJidWRkeSIsImV4cCI6MTY1OTAyODg4MSwidXNlcm5hbWUiOiJhZG1pbiJ9.vdbYbFqCzsYO1u-GMOkd5n2rc_2gGUPB0Zi-PhGTzNY';

// const BusMain = () => {
//     useEffect(() => {
//         const getTodo = async () => {
//             try {
//                 const response = await axios.get('http://3.39.53.3:3000/api/v1/notice', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `${ACCESS_TOKEN}`
//                     }
//                 }
//                 );
//                 console.log(response.data);

//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getTodo();
//     }, []);
//     return <div>GET REQUEST</div>;
// };
// export default BusMain;








// import { useEffect } from 'react';

// import Instance from '../../../apis/BusAxios';

// const BusMain = () => {
//     useEffect(() => {
//         const getTodo = async() => {
//             try {
//                 const response = await Instance.get('/api/v1/notice');
//                 console.log(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getTodo();
//     }, []);
//     return <div>GET REQUEST</div>;
// };
// export default BusMain;














// // axios .then -> async / await로 변경

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import BusList from './BusList';
// import "./BusList.css";

// const BusMain = () => {
//     const [bus, setBus] = useState([]);

//     useEffect(() => {
//         const BusData = async() => {
//             try {
//                 const response = await axios.get('/B551177/BusInformation/getBusInfo?serviceKey=jXxiNCYpEjIEE2m%2BQe81b5LAyrD7QJ5%2FsIPFUYnFpwA2Ka3WSn38o2PMrFQQDzpkDaCBy1PG0E8uTUkf1qsTdQ%3D%3D&numOfRows=15&pageNo=1&area=1&type=json');
//                 console.log(response.data.response.body.items);
//                 setBus(response.data.response.body.items);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         BusData();
//     }, []);


//     return (
//         <>
//             <BusList bus={bus}/>
//         </>
//     );
// }

// export default BusMain;







// // axios .then방식 api 호출

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import BusList from './BusList';
// import "./BusList.css";

// const BusMain = () => {
//     const [bus, setBus] = useState([]);

//     useEffect(() => {
//         axios.get('/B551177/BusInformation/getBusInfo?serviceKey=jXxiNCYpEjIEE2m%2BQe81b5LAyrD7QJ5%2FsIPFUYnFpwA2Ka3WSn38o2PMrFQQDzpkDaCBy1PG0E8uTUkf1qsTdQ%3D%3D&numOfRows=15&pageNo=1&area=1&type=json')
//             .then(response => {
//                 setBus(response.data.response.body.items);
//                 console.log(response.data.response.body.items);
//             });
//     }, []);

//     return (
//         <>
//             <BusList bus={bus}/>
//         </>
//     );
// }

// export default BusMain;

