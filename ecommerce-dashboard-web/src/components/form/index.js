import React, { useState } from "react";
import WonderfulButtonComponent from "../wonderful-button";
import * as Components from './styles';

/**
 * Generic form builder component
 * Props:
 * fields - array of objects representing the form inputs (the objects have the properties: type, name, placeholder)
 * onSubmit - callback function through which we transmit the data from form
 */

const FormComponent = ({ 
    fields, 
    onSubmit = () => {}
 }) => {
  
  // state by which we store the data from the form
  const [formData, setFormData] = useState({});
   
  // used for the toggle button that switches the password input visibility
  const [togglePassword, setTogglePassword] = useState(false);

  // store the data from form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // call the data sending function
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Components.FormContainer>
      {fields?.map((field, index) => (
        <div key={index}> {/* Assign the key prop to the child div */}
          {field.type === 'password' ? (
            <div className='password-input-container'>
              <input
                className='input'
                type={togglePassword ? 'text' : 'password'}
                name={field.name}
                id={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                placeholder={field.placeholder}
              />
              <span
                className='toggle-password'
                onClick={() =>
                  setTogglePassword((prevTogglePassword) => !prevTogglePassword)
                }
              >
                {togglePassword ? (
                  <i class='fa-regular fa-eye-slash'></i>
                ) : (
                  <i className='fa-regular fa-eye'></i>
                )}
              </span>
            </div>
          ) : (
            <div>
              <input
                className='input'
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                placeholder={field.placeholder}
              />
            </div>
          )}
        </div>
      ))}
      <div className='submit-button' onClick={handleSubmit}>
        <WonderfulButtonComponent
          text='SEND'
          backgroundColor='#FF0099'
          textFont='Kanit'
          textColor='white'
          textSize='17.5px'
          icon={<i className='fa-solid fa-share-from-square'></i>}
          iconColor='#FF0099'
        />
      </div>
    </Components.FormContainer>
  );
};

export default FormComponent;
