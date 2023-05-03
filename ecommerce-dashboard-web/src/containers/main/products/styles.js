import styled from 'styled-components';

export const ProductsContainer = styled.div`

    font-family: Mulish;
    
    .pagination {

        font-family: Poppins;
        display: flex;
        color: #666666;
        margin-top: 1rem;
        align-items: center;
        justify-content: space-between;

        .page-numbers {
            font-family: Mulish;
            color: #666666;
            display: flex;
            font-size: 14px;
            align-items: center;

            .active {
                background-color: #edf8ff;
                color: #666666;
                padding: 5px;
                border: 2px solid #008cf0;
                border-radius: 5px;
                cursor: pointer;
            }

            .inactive {
                color: #666666;
                padding: 5px;
                cursor: pointer;
            }
        }
    }
`;