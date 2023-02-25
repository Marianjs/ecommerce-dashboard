import styled from 'styled-components';

export const ToastrContainer = styled.div`

    box-sizing: border-box;
    z-index: 9999;
    position: absolute;
    right: 0;
    overflow: visible;

    .alert {
        font-family: Kanit;
        background-color: white;
        width: 23rem;
        float: right;
        display: flex;
        align-items: center;
        position: relative;
        box-shadow: -1px 2px 17px -7px rgba(0,0,0,1);
        border-left: 5px solid ${
            props => props.type === 'success' 
            ? '#00de30' 
            : props.type === 'error' 
            ? '#de1300' 
            : props.type === 'warning' 
            ? '#f2d600' : '#0098d9'
        };
        height: 5.5rem;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        z-index: 9999;
    }
    
    .alert.show {
        animation: show_slide 1s ease forwards;
    }

    @keyframes show_slide {
        0% {
            transform: translateX(100%);
        }

        40% {
            transform: translateX(-10%);
        }

        80% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-10px);
        }
    }

    .alert-hide {
        display: none;
    }

    .close-btn {
        position: absolute;
        right: 10px;
        color: ${
            props => props.type === 'success' 
            ? '#00de30' 
            : props.type === 'error' 
            ? '#de1300' 
            : props.type === 'warning' 
            ? '#f2d600' : '#0098d9'
        };
        cursor: pointer;
        font-size: 21px;
    }

    .message {
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        color: grey;
    }

    .icon {
        margin-left: 0.2rem;
        font-size: 21px;
        color: ${
            props => props.type === 'success' 
            ? '#00de30' 
            : props.type === 'error' 
            ? '#de1300' 
            : props.type === 'warning' 
            ? '#f2d600' : '#0098d9'
        };
    }

    .text {
        margin-left: 0.8rem;
    }

`;