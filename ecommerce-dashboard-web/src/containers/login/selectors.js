/**
 * Accounts selectors
 */

export const selectAccounts = state => state.accounts.accounts;
export const selectCreateAccountLoading = state => state.accounts.registerLoading;
export const selectCreateAccountToastr = state => state.accounts.registerToastr;
export const selectCreateAccountErrorMessage = state => state.accounts.registerErrorMessage;

export const selectLoginLoading = state => state.accounts.loginLoading;
export const selectLoginToastr = state => state.accounts.loginToastr;
export const selectLoginErrorMessage = state => state.accounts.loginErrorMessage;
export const selectLoginResponseData = state => state.accounts.loginResponseData;

export const selectForgotPasswordLoading = state => state.accounts.forgotPasswordLoading;
export const selectForgotPasswordToastr = state => state.accounts.forgotPasswordToastr;
export const selectForgotPasswordErrorMessage = state => state.accounts.forgotPasswordErrorMessage;
export const selectForgotPasswordCloseModal = state => state.accounts.forgotPasswordCloseModal;