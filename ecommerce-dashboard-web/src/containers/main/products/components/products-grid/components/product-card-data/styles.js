import styled from 'styled-components';

export const ProductCardDataContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .image-container {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.3rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .details {
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;

        .category-price {
            display: flex;
            justify-content: space-between;
            margin-left: 0.8rem;
            margin-right: 0.8rem;

            .category {
                background-color: #F1F7FE;
                border-radius: 5px;
                padding: 4px;
            }
        }

        .name {
            align-self: center;
            margin-top: 1.2rem;
        }
    }

    .actions {
        display: flex;
        gap: 1rem;
        align-self: center;
        margin-top: 1.3rem;

        .edit {
            min-width: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background-color: #C7DBE9;
            color: #5681A0;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
            border-radius: 6px;
        }

        .delete {
            min-width: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background-color: #C7DBE9;
            color: #5681A0;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
            border-radius: 6px;
        }
    }
`;