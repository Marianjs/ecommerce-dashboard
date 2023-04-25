/**
 * Customers actions
 */

import { 
    GET_CUSTOMERS, 
    SET_CUSTOMERS_LOADING, 
    SET_CUSTOMERS,
    EDIT_CUSTOMER
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