import React from "react";
import { CardContainer } from "./styles";
import { Header } from "./styles";

/**
 * Reusable card component
 * @param {ReactNode} children - enable children components 
 * @param {ReactNode} header - the header of the card component
 * @param {boolean} displayHeader - boolean that decides if the header should render or not
 */

const CardComponent = ({
    children,
    header,
    displayHeader = false
}) => {

    return (
        <>
            <CardContainer>
                { displayHeader &&  <div className="header">{header}</div> }
                {children}
            </CardContainer>
        </>
    );
};

export default CardComponent;