import styled from 'styled-components';

export const ModalContainer = styled.div`

.modal-wrapper-closed {
    display: none;
}

.modal-wrapper {
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	transition: opacity 0.1 ease-in-out;
    z-index: 99999999;

		opacity: 1;
		visibility: visible;

        .modal-header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            height: 50px;

            .text {
                display: flex;
                justify-context: flex-end;
                flex-direction: column;

                margin-left: 1rem;
                margin-top: 2rem;

                .title {
                    margin-left: 1rem;
                    margin-top: 2rem;
                }

                .subtitle {
                    margin-left: 1rem;
                    margin-top: 0.4rem;
                }
            }


            .close-button {
                margin-right: 1rem;
                font-size: 23px;
                cursor: pointer;
                margin-top: 4rem;
            }
        }

		.modal-body {
			opacity: 1;
			transform: translateY(1);
	    }
    }

    .modal-body {
		max-width: 500px;      
		opacity: 0;
		transform: translateY(-100px);
		transition: opacity 0.1 ease-in-out;
		width: 100%;
		z-index: 1;
        background-color: white;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;

        .body-wrapper {
            display: flex;
            align-items: ${props => props.isDialog ? '' : 'center'};
            justify-content: ${props => props.isDialog ? '' : 'center'};
            margin-bottom: 1rem;
            margin-top: 4rem;
            flex-direction: row;
            flex-wrap: wrap;
            padding-left: ${props => props.isDialog ? '2rem' : ''}
        }

        .buttons {
            font-family: Kanit;
            display: flex;
            justify-content: flex-end;
            padding: 1.5rem;
            gap: 0.4rem;
            font-size: 20px;

            .decline {
                color: #FF3131;
                cursor: pointer;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
            }

            .decline:hover {
                background-color: #FFD6D6;
                border-radius: 5px;
            }

            .accept {
                color: #07eb6d;
                cursor: pointer;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
            }

            .accept:hover {
                background-color: #D8FFD6;
                border-radius: 5px;
            }
        }
	}
}

`;