import styled from 'styled-components';

export const SideBarContainer = styled.div`

    width: 15.7rem;
    height: 100%;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.35);
    font-family: Mulish;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            font-size: 50px;
            margin-top: 2.6rem;
            color: #008cf0;
        }

        .title {
            margin-left: 1rem;
            margin-top: 2.6rem;
            font-size: 30px;
            color: #008cf0;
        }
    }

    .items {

        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        margin-top: 3rem;
        gap: 2rem;
        padding-left: 1.2rem;

    }
`;

export const SideBarItem = styled.div`

    cursor: pointer;
    color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 2.4rem;
    width: 14.5rem;
    border-radius: 50px 0 0 50px;

    i {
        margin-left: 2.7rem;
        font-size: 20px;
    }

    .name {
        margin-left: 0.6rem;
        font-size: 16.5px;
    }
`;