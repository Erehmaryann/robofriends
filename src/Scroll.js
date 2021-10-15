import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
