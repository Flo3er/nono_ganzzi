import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='main'>
                <div className='mainTop'>
                    <h2>Title</h2>
                    <p>subTitle</p>
                </div>
            </div>
        </div>
    );
};

export default Header;

// import React from 'react';
// import { withRouter } from 'react-router-dom';
// // import styled from 'styled-components';
// import './Header.css';

// const HomeSection = ({ location: { pathname } }) => {
//     <Header>
//       <List>
//         <Item current={pathname === "/"}>
//           <SLink to="/">Movies</SLink>
//         </Item>
//         <Item current={pathname === "/api"}>
//           <SLink to="/api">Search</SLink>
//         </Item>
//       </List>
//     </Header>
// };

// export default withRouter(HomeSection);



//     return (
//         <div className='header'>
//             <div className='main'>
//                 <div className='mainTop'>
//                     <h2>Title</h2>
//                     <p>subTitle</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

