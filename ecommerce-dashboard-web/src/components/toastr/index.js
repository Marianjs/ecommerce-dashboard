import React from 'react';
import { ToastrContainer } from './styles';

/**
 * Custom toastr component
 * It is necessary to be added to return statement of a component in order to show
 * Props:
 * type - the alert type: success (green), error (red), warning (yellow), info (blue)
 * message - the text that appears in toastr
 */

const ToastrComponent = ({
    type,
    message
}) => {

    // alert close button
    const [hideAlert, setHideAlert] = React.useState(false);

    // boolean that manages how long the toastr stays open
    const [isVisible, setIsVisible] = React.useState(true);

    // toastr closes automatically after 5 seconds
    React.useEffect(() => {

        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>        
            {isVisible && 
                <ToastrContainer type={type}>
                    <div className={hideAlert ? "alert-hide" : "alert show"}>
                        <span className="icon">
                            {
                                type === 'success' 
                                    ? <i className="fa-solid fa-circle-check"></i>
                                    : type === 'error'
                                    ? <i className="fa-solid fa-circle-exclamation"></i>
                                    : type === 'warning'
                                    ? <i className="fa-solid fa-circle-exclamation"></i>
                                    : <i className="fa-solid fa-circle-info"></i>
                            }
                        </span>
                        <div className="text">
                            <div className="title">
                                {
                                    type === 'success'
                                        ? 'Succes' 
                                        : type === 'error' 
                                        ? 'Eroare' 
                                        : type === 'warning' 
                                        ? 'Avertisment' 
                                        : type === 'info' 
                                        ? 'Info' : '' 
                                }
                            </div>
                            <div className="message">{message}</div>
                        </div>
                        <span 
                            className="close-btn"
                            onClick={() => setHideAlert(true)}
                        >
                            <i className="fa-solid fa-square-xmark"></i>
                        </span>
                    </div>
                </ToastrContainer>
            }
        </>
    )
};

export default ToastrComponent;