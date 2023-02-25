import { CREATE_ACCOUNT, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR_MESSAGE } from "./constants";

/**
 * New accounts actions
 */

export const actionCreateAccount = payload => ({
    type: CREATE_ACCOUNT,
    payload
});

export const actionCreateAccountSuccess = payload => ({
    type: CREATE_ACCOUNT_SUCCESS,
    payload
});

export const actionCreateAccountErrorMessage = payload => ({
    type: CREATE_ACCOUNT_ERROR_MESSAGE,
    payload
});

