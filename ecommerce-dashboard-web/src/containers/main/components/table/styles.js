import styled from 'styled-components';

export const TableContainer = styled.div`

    font-family: Mulish;

    table {
        border-collapse: collapse;
    }

    th {
        background-color: #edf8ff;
        color: #008cf0;
        padding: 10px 100px 10px 10px;
    }

    td {
        padding: 10px 100px 10px 10px;
    }

    th:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    th:last-child {
        padding-right: 10px !important;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    td:last-child {
        padding-right: 10px !important;
    }

    tbody tr {
        border-bottom: 1px solid #e8e8e8;
        color: #858585;
    }

    .pagination {
        display: flex;
        color: #858585;
        margin-top: 1rem;
        align-items: center;
        justify-content: space-between;

        .pagination-dropdown {
            border: 2px solid #008cf0;
            padding: 2px;
            background-color: #edf8ff;
            font-family: Mulish;
            color: #858585;
            border-radius: 5px;
        }

        .page-numbers {
            font-family: Mulish;
            color: #858585;
            display: flex;
            gap: 0.7rem;
            font-size: 14px;
            align-items: center;

            .active {
                background-color: #edf8ff;
                color: #858585;
                padding: 5px;
                border: 2px solid #008cf0;
                border-radius: 5px;
                cursor: pointer;
            }

            .inactive {
                color: #858585;
                padding: 5px;
                cursor: pointer;
            }
        }
    }
`;