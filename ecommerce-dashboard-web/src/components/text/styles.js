import styled from 'styled-components';

export const TextContainer = styled.div`

    color: ${props => props.color};
    font-family: ${props => props.sansSerif ? `${props.font}, sans-serif` : `${props.font}`};
    font-size: ${props => props.size};
    font-weight: ${props => props.fontWeight};
    letter-spacing: ${props => props.letterSpacing};
    word-break: ${props => props.wordBreak};
    font-size: ${props => props.size};
    text-align: ${props => props.textAlign};
    opacity: ${props => props.opacity};
    
`; 