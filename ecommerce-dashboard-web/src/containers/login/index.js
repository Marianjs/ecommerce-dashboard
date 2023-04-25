import React from "react";
import * as Components from './styles';
import FormComponent from "../../components/form";
import TextComponent from "../../components/text";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateAccount, actionLogin, actionForgotPassword } from "./actions";
import ToastrComponent from "../../components/toastr";
import { 
    selectCreateAccountLoading, 
    selectCreateAccountToastr,
    selectCreateAccountErrorMessage,
    selectLoginLoading,
    selectLoginToastr,
    selectLoginErrorMessage,
    selectLoginResponseData,
    selectForgotPasswordLoading,
    selectForgotPasswordToastr,
    selectForgotPasswordErrorMessage,
    selectForgotPasswordCloseModal
} from "./selectors";
import ModalComponent from "../../components/modal";

/**
 * Login page
 */

export const LoginPage = () => {

    // gives access to the history routes from the project
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // boolean with which we go from the login form to the register form
    const [toggleButton, setToggleButton] = React.useState(true);

    // used when opening and closing the forgot password modal
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // account register selectors
    const registerLoading = useSelector(selectCreateAccountLoading);
    const registerToastr = useSelector(selectCreateAccountToastr);
    const registerErrorMessage = useSelector(selectCreateAccountErrorMessage);

    // login selectors
    const loginLoading = useSelector(selectLoginLoading);
    const loginToastr = useSelector(selectLoginToastr);
    const loginErrorMessage = useSelector(selectLoginErrorMessage);
    const loginResponseData = useSelector(selectLoginResponseData);

    // forgot password selectors
    const forgotPasswordLoading = useSelector(selectForgotPasswordLoading);
    const forgotPasswordToastr = useSelector(selectForgotPasswordToastr);
    const forgotPasswordErrorMessage = useSelector(selectForgotPasswordErrorMessage);
    const forgotPasswordCloseModal = useSelector(selectForgotPasswordCloseModal);

    // sends the register data to saga after the form submit button was clicked
    const handleRegisterFormSubmit = (data) => {
  
        dispatch(actionCreateAccount({
            queryParams: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            }}))

    };

    // sends the login data to saga after the form submit button was clicked
    const handleLoginFormSubmit = (data) => {

        dispatch(actionLogin({
            queryParams: {
                email: data.email,
                password: data.password
            }}))

    };

    // sends the forgot password modal data to saga after the form submit button was clicked
    const handleForgotPasswordSubmit = (data) => {
  
        dispatch(actionForgotPassword({
            queryParams: {
                email: data.email
            }}));

    };

    // redirect to main page if credentials are correct
    React.useEffect(() => {
        
        if (loginToastr) navigate("/main", { state: { userName: loginResponseData } });
        else if (loginToastr === undefined) navigate("/", { state: { userName: "" } });

    }, [loginToastr])

    // functions to control forgot password modal flow
    const handleForgotPasswordClick = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // close the forgot password modal after submitting the data
    React.useEffect(() => {

        if (forgotPasswordCloseModal)
            handleCloseModal();
    }, [forgotPasswordCloseModal]) 

    return(
        <>
            { registerToastr !== undefined && (registerToastr 
                ? <ToastrComponent type='success' message='Cont creat cu succes!' />
                : <ToastrComponent type='error' message={registerErrorMessage} />
            )}
            { loginToastr === false &&
                <ToastrComponent type='error' message={loginErrorMessage} />
            }
            {
                isModalOpen && <ModalComponent 
                    title='Forgot your password ?' 
                    subtitle='We will email you a link to reset your password'
                    body={
                        <FormComponent 
                            fields={[{ type: "email", name: "email", placeholder: "Email" }]}
                            onSubmit={handleForgotPasswordSubmit}
                            isLoading={forgotPasswordLoading}
                        />
                    }
                    closeModal={handleCloseModal} 
                />
            }
            { forgotPasswordToastr !== undefined && (forgotPasswordToastr 
                ? <ToastrComponent type='success' message='We sent you an email with the new password!' />
                : <ToastrComponent type='error' message={forgotPasswordErrorMessage} />
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
                                onSubmit={handleRegisterFormSubmit}
                                isLoading={registerLoading}
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
                                onSubmit={handleLoginFormSubmit}
                                isLoading={loginLoading}
                            />
                            <Components.ForgotPassword
                                onClick={handleForgotPasswordClick}
                            >
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