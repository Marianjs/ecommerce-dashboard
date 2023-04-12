import React from "react";
import TextComponent from "../text";
import { ModalContainer } from "./styles";

/**
 * Generic modal component
 * Props:
 * title - the title displayed in the header of the modal
 * body - the body of the modal
 * closeModal - handles the opening and closing of the modal
 */

const ModalComponent = ({
    title,
    subtitle,
    body,
    closeModal
}) => {

    return (
        <ModalContainer>
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
                        { body }
                    </div>
	            </div>
            </div>
        </ModalContainer>
    )
};
  
export default ModalComponent;
