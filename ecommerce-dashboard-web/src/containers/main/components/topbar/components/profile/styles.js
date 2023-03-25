import styled from 'styled-components';

export const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    font-family: Mulish;

    .text-part {
       margin-right: 0.7rem;
       color: #008cf0;
    }

    .avatar-container {

        .avatar {
            width: 3.6rem;
            height: 3.6rem;
            object-fit: cover;
            margin-right: 0.8rem;
            border-radius: 50%;
            border: 5px solid #008cf0;
        }
    }

    .arrow-down {
        margin-right: 2.5rem;

        i {
            font-size: 28px;
            color: #008cf0;
            cursor: pointer;
        }
    }

    .dropdown {
        position: absolute;
        margin-right: 50rem;

        .dropdown-content {
            background-color: white;
            position: absolute;
            top: 2rem;
            right: -15.5rem;
            width: 10rem;
            z-index: 1;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
            border-radius: 7px;
        }
    
        .catch-arrow {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: white;
            transform: rotate(45deg);
            bottom: -2.6rem;
            right: -13.95rem;
            z-index: 0;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.45);
        }
    }
    
`;