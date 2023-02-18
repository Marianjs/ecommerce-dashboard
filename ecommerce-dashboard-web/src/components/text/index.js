import React from "react";

/**
 * Generic text component
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
        <div 
            style={{
                fontFamily: sansSerif ? `${font}, sans-serif` : font,
                color: color,
                fontSize: size,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                wordBreak: wordBreak,
                textAlign: textAlign,
                opacity: opacity
            }}
        >
            {text}
        </div> 
    )
}

export default TextComponent;