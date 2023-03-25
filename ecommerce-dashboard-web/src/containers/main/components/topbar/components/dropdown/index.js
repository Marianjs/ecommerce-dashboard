import React from "react";
import { DropdownContainer } from "./styles";
import { useNavigate } from "react-router-dom";

/**
 * Profile dropdown component
 * @param {string} icon - dropdown item icon
 * @param {string} text - dropdown item text
 * @param {string} type - dropdown item identifier
 * @param {func} callback - dropdown item callback function on click
 */

const DropdownComponent = ({
    icon,
    text,
    callback
}) => {

    // gives access to the history routes from the project
    const navigate = useNavigate();

    return (
        <DropdownContainer onClick={() => callback(navigate)}>
            <div className='icon'>
                <i className={icon} ></i>
            </div>
            <div className='text'>{text}</div>
        </DropdownContainer>
    );
};

export default DropdownComponent;