/**
 * New accounts selectors
 */

export const selectAccounts = state => state.accounts.accounts;
export const selectCreateAccountSuccess = state => state.accounts.registerSuccess;
export const selectCreateAccountErrorMessage = state => state.accounts.registerErrorMessage;