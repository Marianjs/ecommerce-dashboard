import styled from 'styled-components';

export const LoginPageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

`;

export const Container = styled.div`

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1200px;
  height: 600px;

`;

export const SignUpContainer = styled.div`

  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.toggleButton !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` : null}

`;


export const SignInContainer = styled.div`

  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.toggleButton !== true ? `transform: translateX(100%);` : null)}

`;

export const Form = styled.form`

  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;

`;

export const OverlayContainer = styled.div`

  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.toggleButton !== true ? `transform: translateX(-100%);` : null}

`;

export const Overlay = styled.div`

  background-image: linear-gradient(45deg,#3023AE 0%,#247cff 100%);
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.toggleButton !== true ? `transform: translateX(50%);` : null)}

`;
export const OverlayPanel = styled.div`

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

`;

export const LeftOverlayPanel = styled(OverlayPanel)`

  transform: translateX(-20%);
  ${props => props.toggleButton !== true ? `transform: translateX(0);` : null}

`;

export const RightOverlayPanel = styled(OverlayPanel)`

  right: 0;
  transform: translateX(0);
  ${props => props.toggleButton !== true ? `transform: translateX(20%);` : null}

`;

export const SignupButton = styled.div`

  margin-top: 15px;

`;

export const Divider = styled.div`

  margin-top: 10px;
  height: 0.8px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));

`;

export const ForgotPassword = styled.div`

  cursor: pointer;
  position: absolute;
  right: 21.5%;
  top: 66%;

`;

export const SigninButton = styled.div`

  margin-top: 20px;

`;

export const SimpleButtonComponent = styled.div`

  width: 130px;
  height: 35px;
  background-color: white;
  border-radius: 50px;
  box-shadow: -1px 4px 22px -5px rgba(0,0,0,1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Kanit, sans-serif;
  font-size: 13.5px;
  cursor: pointer;
  color: black;

`;

export const DeformedCircleLeft = styled.div`

  width: 400px;
  height: 400px;
  background-image: linear-gradient(45deg,#3023AE 0%,#FF0099 100%);
  border-radius: 66% 34% 36% 64% / 58% 38% 62% 42%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-30%, 40%);
  overflow: hidden;

`;

export const DeformedCircleRight = styled.div`

  width: 400px;
  height: 400px;
  background-image: linear-gradient(45deg,#3023AE 0%,#FF0099 100%);
  border-radius: 84% 16% 25% 75% / 91% 38% 62% 9%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -40%);
  overflow: hidden;

`;

export const Paragraph = styled.div`

  margin-bottom: 20px;
  margin-top: 10px;

`;



