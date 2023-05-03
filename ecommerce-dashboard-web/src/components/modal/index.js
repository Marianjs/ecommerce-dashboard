import React from "react";
import TextComponent from "../text";
import { ModalContainer } from "./styles";

/**
 * Generic modal component
 * Props:
 * title - the title displayed in the header of the modal
 * body - the body of the modal
 * closeModal - handles the opening and closing of the modal
 * isDialog - decides if the component will be used as a dialog
 * onDialogResponse - callback function that decides if the YES button was clicked
 */

const ModalComponent = ({
    title,
    subtitle,
    body,
    closeModal,
    isDialog,
    onDialogResponse
}) => {

    const [dialogResponse, setDialogResponse] = React.useState(false); // state that stores the dialog response, true if YES is clicked

    const handleDialogResponse = () => onDialogResponse();

    return (
        <ModalContainer isDialog={isDialog}>
            <div className="modal-wrapper">
	            <div className="modal-body">
		            <div className="modal-header">
                        <div className="text">
                            <div className="title">
                                <TextComponent text={title} color='black' size='2rem' fontWeight="bold"/>
                            </div>
                            <div className="subtitle">
                                <TextComponent text={subtitle} color='black' size='0.7rem' fontWeight="bold" />
                            </div>
                        </div>
                        <div className="close-button" onClick={closeModal}>
                            <i className="fa-solid fa-square-xmark"></i>
                        </div>
		            </div>
                    <div className="body-wrapper">
                        {
                            isDialog ? <TextComponent text={body} color='black' size='1rem' fontWeight="bold"/> : body
                        }
                    </div>
                    {
                        isDialog &&
                        <div className="buttons">
                            <div className="decline" onClick={closeModal}>NO</div>
                            <div className="accept" onClick={handleDialogResponse}>YES</div>
                        </div>
                    }
	            </div>
            </div>
        </ModalContainer>
    )
};
  
export default ModalComponent;
