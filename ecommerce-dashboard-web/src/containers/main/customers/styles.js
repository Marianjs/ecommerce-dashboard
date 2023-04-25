import styled from 'styled-components';

export const CustomersContainer = styled.div`

    margin-top: 2.5rem;

    .table-actions {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        .fas.fa-edit {
            color: #E4B70B;
            cursor: pointer;
        }

        .fa.fa-trash {
            color: #FF3131;
            cursor: pointer;
        }
    }
`;