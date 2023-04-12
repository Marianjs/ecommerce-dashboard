import styled from 'styled-components';

export const FilterStatusContainer = styled.div`

    background-color: #008cf0;
    width: 11rem;
    border-radius: 5px;
    cursor: pointer;

    .arrow-down {
       display: flex;
       align-items: center;

        .filter-text {
            font-size: 15px;
            color: white;
            padding: 1rem;
        }

        i {
            font-size: 23px;
            color: white;
            cursor: pointer;
            margin-right: 1rem;
        }
    }

    .dropdown {
        position: absolute;
        margin-right: 20rem;

        .dropdown-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 0.3rem;
            background-color: white;
            position: absolute;
            top: 0.5rem;
            right: -12rem;
            width: 13rem;
            z-index: 1;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
            border-radius: 7px;
            font-size: 15px;
        }

        .catch-arrow {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: white;
            transform: rotate(45deg);
            bottom: -2.6rem;
            right: -9.38rem;
            top: -0.02rem;
            z-index: 0;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
        }
    }
`;