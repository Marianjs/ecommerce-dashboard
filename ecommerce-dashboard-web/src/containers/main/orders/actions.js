/**
 * Orders actions
 */

import { 
    GET_ORDERS, 
    SET_ORDERS_LOADING, 
    SET_ORDERS 
} from "./constants";

export const actionGetOrders = payload => ({
    type: GET_ORDERS,
    payload
});

export const actionSetOrders = payload => ({
    type: SET_ORDERS,
    payload
});

export const actionSetOrdersLoading = payload => ({
    type: SET_ORDERS_LOADING,
    payload
});

