import React from "react";
import * as Components from './styles';

const EmailInputComponent = ({
    placeholder,
    marginTop,
    marginBottom,
    onEmailChange = () => {}
}) => {

    return (
        <Components.EmailInputContainer marginTop={marginTop} marginBottom={marginBottom}>
            <input 
                type='email'
                className='email-input'
                placeholder={placeholder}
                onChange={(event) => onEmailChange(event.target.value)}
            />
        </Components.EmailInputContainer>
    )
}

export default EmailInputComponent;