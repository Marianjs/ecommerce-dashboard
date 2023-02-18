import React from "react";
import * as Components from './styles';
import FormComponent from "../form";
import WonderfulButtonComponent from "../wonderful-button";
import TextComponent from "../text";

export const LoginPage = () => {

    const [toggleButton, setToggleButton] = React.useState(true);

    return(
        <Components.LoginPageContainer>
            <Components.Container>
                <Components.SignUpContainer toggleButton={toggleButton}>
                    <Components.Form>
                        <TextComponent 
                            text='Create Account'
                            color='black'
                            size='50px'
                        />
                        <Components.Divider></Components.Divider>
                        <FormComponent 
                            dataInputs={[
                                { type: 'text', placeholder: 'First Name' },
                                { type: 'text', placeholder: 'Last Name' },
                                { type: 'email', placeholder: 'Email' }, 
                                { type: 'password', placeholder: 'Password' }]}
                            onEmailChange={()=>{}}
                            eyeToggleFormType='sign-up'
                        />
                        <Components.SignupButton
                            onClick={()=>{}}
                        >
                            <WonderfulButtonComponent 
                                text='SIGN UP'
                                backgroundColor='#FF0099'
                                textFont='Kanit'
                                textColor='white'
                                textSize='17.5px'
                                icon={<i class="fa-regular fa-id-card"></i>}
                                iconColor='#FF0099'
                            />
                        </Components.SignupButton>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer toggleButton={toggleButton}>
                    <Components.Form>
                        <TextComponent 
                            text='Login to Your Account'
                            sansSerif
                            size='60px'
                            color='black'
                        />
                        <Components.Divider></Components.Divider>
                        <FormComponent 
                            dataInputs={[{ type: 'email', placeholder: 'Email' }, { type: 'password', placeholder: 'Password' }]}
                            onEmailChange={()=>{}}
                            eyeToggleFormType='sign-in'
                        />
                        <Components.ForgotPassword>
                            <TextComponent 
                                text='Forgot password ?'
                                color='grey'
                                font='Kanit'
                                size='14px'
                            />
                        </Components.ForgotPassword>
                        <Components.SigninButton
                            onClick={()=>{}}
                        >
                            <WonderfulButtonComponent 
                                text='SIGN IN'
                                backgroundColor='#FF0099'
                                textFont='Kanit'
                                textColor='white'
                                textSize='17.5px'
                                icon={<i className="fa-solid fa-right-to-bracket"></i>}
                                iconColor='#FF0099'
                            />
                        </Components.SigninButton>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer toggleButton={toggleButton}>
                    <Components.Overlay toggleButton={toggleButton}>

                    <Components.LeftOverlayPanel toggleButton={toggleButton}>
                        <TextComponent 
                            text='Welcome Back !'      
                            sansSerif
                            size='50px'
                            fontWeight='20px'
                        />
                        <Components.Paragraph>
                            <TextComponent 
                                text='To keep connected with us please login with your personal info'      
                                sansSerif
                                size='15px'
                                fontWeight='5px'
                                font='Montserrat'
                                textAlign='center'
                                opacity='0.9'
                            />
                        </Components.Paragraph>
                            <Components.SimpleButtonComponent onClick={() => setToggleButton(true)}>
                                SIGN IN                       
                            </Components.SimpleButtonComponent>
                    </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel toggleButton={toggleButton}>
                            
                            <TextComponent 
                                text='New Here ?'
                                size='50px'
                                sansSerif
                            />

                            <Components.Paragraph>
                                <TextComponent 
                                    text='Sign up for our admin dashboard to streamline your operations and easily manage our data'
                                    size='15px'
                                    font='Montserrat'
                                />
                            </Components.Paragraph>

                            <Components.SimpleButtonComponent onClick={() => setToggleButton(false)}>
                                SIGN UP                       
                            </Components.SimpleButtonComponent>

                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
            <Components.DeformedCircleLeft></Components.DeformedCircleLeft>
            <Components.DeformedCircleRight></Components.DeformedCircleRight>
        </Components.LoginPageContainer>
    )
}

export default LoginPage;