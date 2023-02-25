import React from "react";
import * as Components from './styles';
import FormComponent from "../../components/form";
import TextComponent from "../../components/text";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateAccount } from "./actions";
import ToastrComponent from "../../components/toastr";
import { selectCreateAccountSuccess, selectCreateAccountErrorMessage } from "./selectors";

/**
 * Login page
 */

export const LoginPage = () => {

    // gives access to the history routes from the project
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // boolean with which we go from the login form to the register form
    const [toggleButton, setToggleButton] = React.useState(true);

    // account register selectors
    const registerSuccess = useSelector(selectCreateAccountSuccess);
    const registerErrorMessage = useSelector(selectCreateAccountErrorMessage);

    // sends the data to saga after the form submit button was clicked
    const handleFormSubmit = (data) => {
  
        dispatch(actionCreateAccount({
            queryParams: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            }}))

    };

    return(
        <>     
            { registerSuccess !== undefined && (registerSuccess 
                ? <ToastrComponent type='success' message='Cont creat cu succes!' />
                : <ToastrComponent type='error' message={registerErrorMessage} />
            )}
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
                                fields={[
                                { type: "text", name: "firstName", placeholder: "First Name" },
                                { type: "text", name: "lastName", placeholder: "Last Name" },
                                { type: "email", name: "email", placeholder: "Email" },
                                { type: "password", name: "password", placeholder: "Password" }]}
                                onSubmit={handleFormSubmit}
                            />
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
                                fields={[
                                { type: "email", name: "email", placeholder: "Email" },
                                { type: "password", name: "password", placeholder: "Password" }]}
                                onSubmit={handleFormSubmit}
                            />
                            <Components.ForgotPassword>
                                <TextComponent 
                                    text='Forgot password ?'
                                    color='grey'
                                    font='Kanit'
                                    size='14px'
                                />
                            </Components.ForgotPassword>
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
        </>
    )
}

export default LoginPage;