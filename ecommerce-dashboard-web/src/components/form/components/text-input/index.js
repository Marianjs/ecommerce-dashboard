import React from "react";
import * as Components from './styles';

const TextInputComponent = ({
    placeholder,
    marginTop,
    marginBottom
}) => {
    return (
        <Components.TextInputContainer marginTop={marginTop} marginBottom={marginBottom}>
            <input 
                type='text'
                className='text-input'
                placeholder={placeholder}
            />
        </Components.TextInputContainer>
    )
}

export default TextInputComponent;