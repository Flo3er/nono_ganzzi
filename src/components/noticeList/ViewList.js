import React from 'react';

const ViewList = ({list}) => {
    return (
        <div>
            {list && list.map((list)=>
            <div key={list.noticeId}>
                <p>{list.noticeId}</p>
                <p>{list.title}</p>
            </div>
            
            )}
        </div>
    );
};

export default ViewList;