import styled from 'styled-components';

export const SearchBarContainer = styled.div`

    position: relative;

    .search-bar {
        border: none;
        background-color: #f5f5f5;
        padding: 13px;
        border-radius: 25px;  
        min-width: 30vw;
        caret-color: #bababa;
        padding-left: 3.5rem;
        color: #bababa;
        font-family: Mulish;
        
        ::placeholder {
            font-family: Mulish;
            position: absolute;
            left: 12%;
            top: 29%;
            color: #bababa;
        } 
    }

    .fa.fa-search {
        position: absolute;
        top: 27%;
        left: 5%;
        color: #bababa;
    }
`;