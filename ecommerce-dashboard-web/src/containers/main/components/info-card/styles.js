import styled from 'styled-components';

export const CardDataContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Kanit;
    padding: 2rem;
    width: 100%;

    .spinning-loader {
        margin-left: 6rem;
    }

    .icon {
        align-self: center;
        font-size: 40px;
        border-radius: 50%;
        background-color: ${props => props.backgroundIconColor};
        color: ${props => props.color};
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        .title {
            color: ${props => props.color};
            font-size: 20px;
        }

        .value {
            font-size: 35px;
        }

        .description {
            margin-top: 1rem;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            color: ${props => props.isPositive ? "#07eb6d" : "red"}
        }
    }

`;