import React, { useState } from "react";
import * as Components from './styles';

const PasswordInputComponent = ({
    placeholder,
    marginBottom,
    marginTop,
    eyeToggleFormType
}) => {

    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <Components.PasswordInputContainer marginTop={marginTop} marginBottom={marginBottom}>
            <input 
                type={togglePassword ? 'text' : 'password'}
                className='password-input'
                placeholder={placeholder}
            />
            <Components.EyeToggle
                onClick={() => setTogglePassword(prevTogglePassword => !prevTogglePassword)}
                eyeToggleFormType={eyeToggleFormType}
            >
                { togglePassword ? <i class="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i> }
            </Components.EyeToggle>
        </Components.PasswordInputContainer>
    )
}

export default PasswordInputComponent;