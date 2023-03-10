import styled from 'styled-components';

export const SpinningLoader = styled.div`

    .loader {
        width: ${props => props.width};
        height: ${props => props.height};
        border: 3.5px solid;
        border-color: fuchsia;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    } 
      
`;