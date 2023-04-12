import React from "react";
import { CardContainer } from "./styles";
import { Header } from "./styles";

/**
 * Reusable card component
 * @param {ReactNode} children - enable children components 
 * @param {ReactNode} header - the header of the card component
 */

const CardComponent = ({
    children,
    header
}) => {

    return (
        <>
            <CardContainer>
                <div className="header">{header}</div>
                {children}
            </CardContainer>
        </>
    );
};

export default CardComponent;