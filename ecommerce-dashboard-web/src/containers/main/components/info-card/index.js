import React from "react";
import { CardDataContainer } from "./styles";
import SpinningLoader from "../../../../components/spinning-loader";

/**
 * Component rendered in the main page cards
 * Contains general data about the application
 * @param {string} title - the card title
 * @param {Object} data - data object to be displayed: { valueName, percentageValue }
 * @param {string} valueName - decides what value name property of the data object to be displayed
 * @param {string} icon - suggestive font awesome icon to be displayed
 * @param {boolean} isLoading - displays a spinning loader while api request is pending
 * @param {string} color - title and icon color
 * @param {string} backgroundIconColor - background icon color
 */

const CardDataComponent = ({
    title,
    data,
    valueName,
    icon,
    isLoading,
    color,
    backgroundIconColor
}) => {


    return (
        <CardDataContainer 
            color={color} 
            backgroundIconColor={backgroundIconColor} 
            isPositive={data && data.percentageValue >= 0}
        >
            {
                isLoading ? <div className="spinning-loader">
                                <SpinningLoader color='#008cf0' width='50px' height='50px' />
                            </div> :              
                <>
                    <div className="body">
                    <div className="title">{title}</div>
                    <div className="value">{data && data[valueName]}</div>
                    <div className="description">
                        <div className="description-icon">
                            <i className={`fas fa-angle-double-${data && data.percentageValue >= 0 ? "up" : "down"}`}></i>
                        </div>
                        <div className="description-text">{`${data && data.percentageValue}% since last month`}</div>
                    </div>
                    </div>
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                </>
            }
        </CardDataContainer>
    );
};

export default CardDataComponent;