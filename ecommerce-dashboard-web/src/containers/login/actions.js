import { 
    CREATE_ACCOUNT, 
    CREATE_ACCOUNT_LOADING, 
    CREATE_ACCOUNT_TOASTR, 
    CREATE_ACCOUNT_ERROR_MESSAGE,
    LOGIN,
    LOGIN_LOADING,
    LOGIN_TOASTR,
    LOGIN_ERROR_MESSAGE,
    SET_LOGIN_RESPONSE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_LOADING,
    FORGOT_PASSWORD_TOASTR,
    FORGOT_PASSWORD_ERROR_MESSAGE,
    FORGOT_PASSWORD_CLOSE_MODAL,
    SET_LOGOUT
} from "./constants";

/**
 * Accounts actions
 */

export const actionCreateAccount = payload => ({
    type: CREATE_ACCOUNT,
    payload
});

export const actionCreateAccountLoading = payload => ({
    type: CREATE_ACCOUNT_LOADING,
    payload
});

export const actionCreateAccountToastr = payload => ({
    type: CREATE_ACCOUNT_TOASTR,
    payload
});

export const actionCreateAccountErrorMessage = payload => ({
    type: CREATE_ACCOUNT_ERROR_MESSAGE,
    payload
});

export const actionLogin = payload => ({
    type: LOGIN,
    payload
});

export const actionLoginLoading = payload => ({
    type: LOGIN_LOADING,
    payload
});

export const actionLoginToastr = payload => ({
    type: LOGIN_TOASTR,
    payload
});

export const actionLoginErrorMessage = payload => ({
    type: LOGIN_ERROR_MESSAGE,
    payload
});

export const actionSetLoginResponse = payload => ({
    type: SET_LOGIN_RESPONSE,
    payload
});

export const actionForgotPassword = payload => ({
    type: FORGOT_PASSWORD,
    payload
});

export const actionForgotPasswordLoading = payload => ({
    type: FORGOT_PASSWORD_LOADING,
    payload
});

export const actionForgotPasswordToastr = payload => ({
    type: FORGOT_PASSWORD_TOASTR,
    payload
});

export const actionForgotPasswordErrorMessage = payload => ({
    type: FORGOT_PASSWORD_ERROR_MESSAGE,
    payload
});

export const actionForgotPasswordCloseModal = payload => ({
    type: FORGOT_PASSWORD_CLOSE_MODAL,
    payload
});

export const actionSetLogout = payload => ({
    type: SET_LOGOUT,
    payload
});



