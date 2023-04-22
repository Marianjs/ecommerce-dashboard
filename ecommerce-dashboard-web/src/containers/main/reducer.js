/**
 * Info cards reducer
 */

import { 
    SET_REVENUE_INFO_CARD,
    SET_REVENUE_INFO_CARD_LOADING,
    SET_TOTAL_ORDERS_INFO_CARD,
    SET_TOTAL_ORDERS_INFO_CARD_LOADING
} from "./constants";

export const initialState = {};
  
const infoCardsReducer = (state = initialState, action) => {
  
    switch(action.type) {
  
        case SET_REVENUE_INFO_CARD:
            return {
                ...state,
                revenueInfoCard: action.payload
            };
  
        case SET_REVENUE_INFO_CARD_LOADING:
            return {
                ...state,
                revenueInfoCardLoading: action.payload
            };

        case SET_TOTAL_ORDERS_INFO_CARD:
            return {
                ...state,
                totalOrdersInfoCard: action.payload
            };
  
        case SET_TOTAL_ORDERS_INFO_CARD_LOADING:
            return {
                ...state,
                totalOrdersInfoCardLoading: action.payload
            };
  
        default:
            return state;
    }
}
  
export default infoCardsReducer;
  