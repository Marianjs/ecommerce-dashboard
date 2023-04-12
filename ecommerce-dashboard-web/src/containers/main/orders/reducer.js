/**
 * Orders reducer
 */

import { 
    SET_ORDERS, 
    SET_ORDERS_LOADING
} from "./constants";

  export const initialState = {
    orders: [],
    ordersCount: 0
  };
  
  const ordersReducer = (state = initialState, action) => {
  
    switch(action.type) {
  
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload.data,
                ordersCount: action.payload.dataCount
            };
  
        case SET_ORDERS_LOADING:
          return {
              ...state,
              ordersLoading: action.payload
            };
  
        default:
            return state;
    }
  }
  
  export default ordersReducer;
  