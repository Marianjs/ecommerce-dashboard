import React, { useState } from "react";
import WonderfulButtonComponent from "../wonderful-button";
import * as Components from './styles';

/**
 * Dialog component - modal used to decline or accept various actions
 * @param {func} onSubmit - callback function through which we transmit the data from form
 * @param {string} description - message to be displayed in the dialog
 * @param {func} closeDialog - closes the dialog component
 */

const DialogComponent = ({ 
    description,
    onSubmit,
    closeDialog
 }) => {

  // call the data sending function
  const handleSubmit = (event) => {

  };

  return (
    <Components.DialogContainer>
      <div className='description'>{description}</div>
      <div className='buttons' onClick={handleSubmit}>
        <div className='decline' onClick={closeDialog}>
            No
        </div>
        <div className='accept'>
            Yes
        </div>
      </div>
    </Components.DialogContainer>
  );
};

export default DialogComponent;
