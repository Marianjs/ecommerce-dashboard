/**
 * Products actions
 */

import { 
    GET_PRODUCTS,
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING
} from "./constants";

export const actionGetProducts = payload => ({
    type: GET_PRODUCTS,
    payload
});

export const actionSetProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});

export const actionSetProductsLoading = payload => ({
    type: SET_PRODUCTS_LOADING,
    payload
});