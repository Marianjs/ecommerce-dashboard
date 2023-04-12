import styled from 'styled-components';

export const MainPageContainer = styled.div`

    height: 100vh;   
    margin: 0;
    padding: 0; 

    .sidebar-component {
        width: 15.7rem;
        height: 100vh;
        position: fixed;
        left: 0;
    }

    .inner-content {
        margin-left: 18rem;

        .header {
            height: 12vh;
        }

        .main {
            margin-top: 2.4rem;
            margin-right: 2rem;

            .info-cards {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }

            .orders-container {
                margin-top: 3rem;
                margin-bottom: 2rem;
            }
        }
    }
`;