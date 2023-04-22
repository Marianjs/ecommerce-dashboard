/**
 * Info cards actions
 */

import { 
    GET_REVENUE_INFO_CARD, 
    SET_REVENUE_INFO_CARD_LOADING,
    SET_REVENUE_INFO_CARD,
    GET_TOTAL_ORDERS_INFO_CARD,
    SET_TOTAL_ORDERS_INFO_CARD,
    SET_TOTAL_ORDERS_INFO_CARD_LOADING
} from "./constants";

export const actionGetRevenueInfoCard = payload => ({
    type: GET_REVENUE_INFO_CARD,
    payload: payload
});

export const actionSetRevenueInfoCard = payload => ({
    type: SET_REVENUE_INFO_CARD,
    payload: payload
});

export const actionSetRevenueInfoCardLoading = payload => ({
    type: SET_REVENUE_INFO_CARD_LOADING,
    payload: payload
});

export const actionGetTotalOrdersInfoCard = payload => ({
    type: GET_TOTAL_ORDERS_INFO_CARD,
    payload: payload
});

export const actionSetTotalOrdersInfoCard = payload => ({
    type: SET_TOTAL_ORDERS_INFO_CARD,
    payload: payload
});

export const actionSetTotalOrdersInfoCardLoading = payload => ({
    type: SET_TOTAL_ORDERS_INFO_CARD_LOADING,
    payload: payload
});

