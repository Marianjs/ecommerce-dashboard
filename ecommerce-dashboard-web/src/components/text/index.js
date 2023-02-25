import React from "react";
import * as Components from "./styles";

/**
 * Generic text component
 * Props are for styling purposes
 */

const TextComponent = ({
    text,
    font = 'Arial',
    sansSerif = true,
    color = 'white',
    size,
    fontWeight,
    letterSpacing = 'normal',
    wordBreak = 'normal',
    textAlign,
    opacity
}) => {
    return(
        <Components.TextContainer
            sansSerif={sansSerif}
            size={size}
            font={font}
            color={color}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            wordBreak={wordBreak}
            textAlign={textAlign}
            opacity={opacity}
        >
            { text }
        </Components.TextContainer>
    )
}

export default TextComponent;