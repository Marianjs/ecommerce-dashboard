import React from "react";
import { FooterContainer } from "./styles";

const FooterComponent = () => {

    return (
        <FooterContainer>
            <div className="body">
                <div>Copyright</div>
                <div>
                    <i className="fa fa-copyright"></i>
                </div>
                <div>E-Commerce Dashboard 2023</div>
            </div>
        </FooterContainer>
    )
};

export default FooterComponent;