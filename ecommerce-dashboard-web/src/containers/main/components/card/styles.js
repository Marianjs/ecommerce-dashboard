import styled from 'styled-components';

export const Header = styled.div`
    font-family: Mulish;
`;

export const CardContainer = styled.div`
    min-width: 270px;
    min-height: 230px;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    .header {
        align-self: start;
        position: absolute;
        left: 0;
        padding: 1.2rem;
        font-family: Mulish;
        font-size: 20px;
        width: 100%;
    }
`;