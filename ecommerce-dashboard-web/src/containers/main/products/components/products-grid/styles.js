import styled from 'styled-components';

export const ProductsGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .pagination {
        align-self: flex-end;
        margin-right: 5rem;
        margin-top: -1.8rem;
    }

    .products-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .spinning-loader {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;