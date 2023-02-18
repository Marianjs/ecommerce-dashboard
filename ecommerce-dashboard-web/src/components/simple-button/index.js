import React from "react";
import './styles.css';

const SimpleButtonComponent = ({
    text
}) => {

    return (
        <div className='simple-button-container'>
            <div className='text-container'>{text}</div>
        </div>
    )

}

export default SimpleButtonComponent;