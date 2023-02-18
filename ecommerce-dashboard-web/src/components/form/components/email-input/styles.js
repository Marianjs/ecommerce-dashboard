import styled from "styled-components";

export const EmailInputContainer = styled.div`

    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    .email-input {
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

    .email-input::placeholder {
        color: rgb(132, 132, 132);
        font-family: Kanit;
    }

`;
