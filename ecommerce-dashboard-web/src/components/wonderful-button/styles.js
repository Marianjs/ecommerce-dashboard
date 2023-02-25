import styled from 'styled-components';

export const WonderfulButtonContainer = styled.div`

    width: 150px;
    height: 40px;
    background-color: white;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: -1px 2px 12px -5px rgba(0,0,0,1);  

`;

export const OtherSide = styled.div`

    width: 300px;
    height: 300px;
    position: absolute;
    transform: translate(-180px, -200px) rotate(35deg);
    background-color: ${props => props.backgroundColor};

`;

export const MainContainer = styled.div`

    position: relative;
    cursor: pointer;

`;

export const Text = styled.div`

    position: absolute;
    top: 17%;
    left: 15%;
    
`;

export const Icon = styled.div`

    position: absolute;
    right: 12%;
    top: 27%;
    color: ${props => props.color};

`;
