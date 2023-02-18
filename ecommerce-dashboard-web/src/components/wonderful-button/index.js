import React from "react";
import TextComponent from "../text";
import './styles.css';

const WonderfulButtonComponent = ({
    text,
    backgroundColor,
    textColor,
    textFont,
    textSize,
    icon,
    iconColor
}) => {
    return (
        <div className='main-container'>
            <div className='wonderful-button-container'>  
                <div 
                    className='other-side'
                    style={{ backgroundColor: backgroundColor }}>
                </div>

                <div 
                    className='icon'
                    style={{ color: iconColor }}
                >
                    {icon}
                </div>
            </div>
            <div className='text'>
                <TextComponent 
                    text={text}
                    color={textColor}
                    font={textFont}
                    size={textSize}
                />
            </div>
        </div>
    )
}

export default WonderfulButtonComponent;