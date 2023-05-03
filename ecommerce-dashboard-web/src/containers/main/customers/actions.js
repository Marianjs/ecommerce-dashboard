/**
 * Customers actions
 */

import { 
    GET_CUSTOMERS, 
    SET_CUSTOMERS_LOADING, 
    SET_CUSTOMERS,
    EDIT_CUSTOMER,
    EDIT_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_ERROR_MESSAGE,
    EDIT_CUSTOMER_RESET_FLAG,
    DELETE_CUSTOMER,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_ERROR_MESSAGE,
    DELETE_CUSTOMER_RESET_FLAG
} from "./constants";

export const actionGetCustomers = payload => ({
    type: GET_CUSTOMERS,
    payload
});

export const actionSetCustomers = payload => ({
    type: SET_CUSTOMERS,
    payload
});

export const actionSetCustomersLoading = payload => ({
    type: SET_CUSTOMERS_LOADING,
    payload
});

export const actionEditCustomer = payload => ({
    type: EDIT_CUSTOMER,
    payload
});

export const actionEditCustomerSuccess = payload => ({
    type: EDIT_CUSTOMER_SUCCESS,
    payload
});

export const actionEditCustomerErrorMessage = payload => ({
    type: EDIT_CUSTOMER_ERROR_MESSAGE,
    payload
});

export const actionEditCustomerResetFlag = payload => ({
    type: EDIT_CUSTOMER_RESET_FLAG,
    payload
});

export const actionDeleteCustomer = payload => ({
    type: DELETE_CUSTOMER,
    payload
});

export const actionDeleteCustomerSuccess = payload => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload
});

export const actionDeleteCustomerErrorMessage = payload => ({
    type: DELETE_CUSTOMER_ERROR_MESSAGE,
    payload
});

export const actionDeleteCustomerResetFlag = payload => ({
    type: DELETE_CUSTOMER_RESET_FLAG,
    payload
});