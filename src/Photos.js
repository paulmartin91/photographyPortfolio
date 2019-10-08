import React from 'react';
import './App.css';

const Photos = (props) => {
    return (
        <div>
            <img className="photoMain" src={props.photo} />
        </div>
    )
}

export default Photos;