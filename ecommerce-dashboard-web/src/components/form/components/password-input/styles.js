import styled from "styled-components";

export const PasswordInputContainer = styled.div`

    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    .password-input {
        background-color: rgb(239, 240, 244);
        width: 350px;
        height: 40px;
        border-radius: 18px;
        border: none;
        box-shadow: -1px 3px 8px -7px rgba(0,0,0,1);
        outline: none !important;
        padding-left: 16px;
        color: rgb(132, 132, 132);
        font-family: Kanit;
    }

    .password-input::placeholder {
        color: rgb(132, 132, 132);
        font-family: Kanit;
    }

`;

export const EyeToggle = styled.div`

    position: absolute;
    right: 23%;
    bottom: ${props => props.eyeToggleFormType === 'sign-in' ? '36%' : '32.3%' };
    color: rgb(132, 132, 132);
    cursor: pointer;

`;