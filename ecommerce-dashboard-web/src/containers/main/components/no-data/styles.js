import styled from 'styled-components';

export const NoDataContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .no-data {
        object-fit: cover;
        width: 17vw;
    }

    h2 {
        font-family: Mulish;
        color: #858585;
        margin-top: -1rem;
    }
`;