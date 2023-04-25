/**
 * Customers reducer
 */

import { 
    SET_CUSTOMERS, 
    SET_CUSTOMERS_LOADING
} from "./constants";

export const initialState = {
  customers: [],
  customersCount: 0
};
  
const customersReducer = (state = initialState, action) => {

  switch(action.type) {

      case SET_CUSTOMERS:
          return {
              ...state,
              customers: action.payload.data,
              customersCount: action.payload.dataCount
          };

      case SET_CUSTOMERS_LOADING:
        return {
            ...state,
            customersLoading: action.payload
          };

      default:
          return state;
  }
}
  
export default customersReducer;
  