import React from "react";
import { DropdownContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useHandleClick } from "../../../../../../service/useful-functions";
import { useDispatch } from "react-redux";

/**
 * Profile dropdown component
 * @param {string} icon - dropdown item icon
 * @param {string} text - dropdown item text
 * @param {string} type - dropdown item identifier
 * @param {func} callback - dropdown item callback function on click
 * @param {boolean} profileRequest - boolean to know if the component is used for the profile component
 * @param {boolean} ordersDetailsRequest - boolean to know if the component is used for the orders details component
 */

const DropdownComponent = ({
    icon,
    text,
    callback,
    profileRequest,
    ordersDetailsRequest
}) => {

    // gives access to the history routes from the project
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <DropdownContainer onClick={() => profileRequest ? callback(navigate, dispatch) : callback(text)}>
            <div className='icon'>
                <i className={icon} ></i>
            </div>
            <div className='text'>{text}</div>
        </DropdownContainer>
    );
};

export default DropdownComponent;