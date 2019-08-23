import React from 'react';
import './CircleData.css';

const CircleData = (props) => {
    return (
        // "rounded-circle CircleData"
        <div className={"rounded-circle CircleData " + ((props.mobile) ? "CircleDataMobile" : null)}>
            <div className="CircleDataText">{props.number}</div>
            <div className="CircleDataUnit">{props.unit}</div>
        </div>
    );
}

export default CircleData;