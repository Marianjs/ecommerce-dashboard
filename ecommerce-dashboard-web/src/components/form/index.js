import React from 'react'
import './styles.css';
import TextInputComponent from './components/text-input';
import EmailInputComponent from './components/email-input';
import PasswordInputComponent from './components/password-input';

const FormComponent = ({
    dataInputs,
    onEmailChange = () => {},
    eyeToggleFormType
}) => {

    const returnInput = () => {
        return dataInputs.map(item => {
            switch (item.type) {
                case 'text': return <TextInputComponent placeholder={item.placeholder} marginTop='20px' />;
                case 'email': return <EmailInputComponent 
                                        placeholder={item.placeholder} 
                                        marginBottom='20px' 
                                        marginTop='20px' 
                                        onEmailChange={onEmailChange} 
                                     />;
                case 'date': return <input type='datetime-local' />;
                case 'checkbox': return <input type='checkbox' />;
                case 'radio': return <input type='radio' />;
                case 'password': return <PasswordInputComponent placeholder={item.placeholder} marginBottom='20px' eyeToggleFormType={eyeToggleFormType} />;
                case 'number': return <input type='number' />;
                case 'tel': return <input type='tel' />;
                default: return <input type='text' />;
            }
        })
    }

    return(
        <div className='form-container'>
            {
                returnInput()
            }
        </div>
    )
}

export default FormComponent;