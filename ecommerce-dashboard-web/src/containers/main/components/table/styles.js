import styled from 'styled-components';

export const TableDataContainer = styled.td`

    color: ${props => 
        props.isOrdersTable && props.row[props.column.key] === 'Delivered' 
        ? '#07eb6d' : props.row[props.column.key] === 'Pending' ? '#E4B70B'
        : props.row[props.column.key] === 'Cancelled' ? '#FF3131' : ''};
`;

export const TableContainer = styled.div`

    table {
        border-collapse: collapse;
    }

    th {
        background-color: #edf8ff;
        color: #008cf0;
        padding: 10px 100px 10px 10px;
        font-family: Mulish;
    }

    td {
        padding: 10px 100px 10px 10px;
        font-family: Kanit;
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
        color: #666666;
    }

    .pagination {
        font-family: Poppins;
        display: flex;
        color: #666666;
        margin-top: 1rem;
        align-items: center;
        justify-content: space-between;

        .pagination-dropdown {
            border: 2px solid #008cf0;
            padding: 2px;
            background-color: #edf8ff;
            font-family: Mulish;
            color: #666666;
            border-radius: 5px;
        }

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