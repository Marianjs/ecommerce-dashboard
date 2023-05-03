import React from "react";
import { DropdownContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

/**
 * Profile dropdown component
 * @param {string} icon - dropdown item icon
 * @param {number} id - dropdown item id
 * @param {string} text - dropdown item text
 * @param {string} type - dropdown item identifier
 * @param {func} callback - dropdown item callback function on click
 * @param {boolean} profileRequest - boolean to know if the component is used for the profile component
 * @param {boolean} ordersDetailsRequest - boolean to know if the component is used for the orders details component
 */

const DropdownComponent = ({
    icon,
    id,
    text,
    callback,
    profileRequest
}) => {

    // gives access to the history routes from the project
    const navigate = useNavigate();

    // dispatch action
    const dispatch = useDispatch();

    return (
        <DropdownContainer 
            onClick={() => profileRequest ? callback(navigate, dispatch) : callback(text, id)}
        >
            <div className='icon'>
                <i className={icon}></i>
            </div>
            <div className='text'>{text}</div>
        </DropdownContainer>
    );
};

export default DropdownComponent;