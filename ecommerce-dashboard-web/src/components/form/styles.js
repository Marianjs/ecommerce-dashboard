import styled from 'styled-components';

export const FormContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: visible;

    .input {
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
        margin-top: 1rem;
    }

    .password-input-container {
        display: flex;
        align-items: center;
        position: relative;
        overflow: visible;

        .toggle-password {
            position: absolute;
            right: 0.8rem;
            bottom: 0.6rem;
            color: rgb(132, 132, 132);
            cursor: pointer;
        }
    }

    .submit-button {
        margin-top: 2.5rem;
    }

`; 