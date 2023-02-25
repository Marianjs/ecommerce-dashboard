import React from "react";
import TextComponent from "../text";
import * as Components from "./styles"

/**
 * Generic button component
 * Props are for styling purposes
 */

const WonderfulButtonComponent = ({
    text,
    backgroundColor,
    textColor,
    textFont,
    textSize,
    icon,
    iconColor
}) => {
    return (
        <Components.MainContainer>
            <Components.WonderfulButtonContainer> 
                <Components.OtherSide backgroundColor={backgroundColor}></Components.OtherSide>
                <Components.Icon color={iconColor}>
                    { icon }
                </Components.Icon>
            </Components.WonderfulButtonContainer>
            <Components.Text>
                <TextComponent 
                    text={text}
                    color={textColor}
                    font={textFont}
                    size={textSize}
                />
            </Components.Text>
        </Components.MainContainer>
    )
}

export default WonderfulButtonComponent;