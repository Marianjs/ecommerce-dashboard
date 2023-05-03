/**
 * Customers reducer
 */

import { 
  DELETE_CUSTOMER_ERROR_MESSAGE,
  DELETE_CUSTOMER_RESET_FLAG,
  DELETE_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_ERROR_MESSAGE,
  EDIT_CUSTOMER_RESET_FLAG,
  EDIT_CUSTOMER_SUCCESS,
  SET_CUSTOMERS, 
  SET_CUSTOMERS_LOADING
} from "./constants";

export const initialState = {
  customers: [],
  customersCount: 0,
  isEditCustonerSuccess: undefined,
  editCustomerErrorMessage: ''
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

      case EDIT_CUSTOMER_SUCCESS:
        return {
            ...state,
            isEditCustomerSuccess: action.payload
          };

      case EDIT_CUSTOMER_ERROR_MESSAGE:
        return {
            ...state,
            editCustomerErrorMessage: action.payload
          };    

      case EDIT_CUSTOMER_RESET_FLAG:
        return {
            ...state,
            isEditCustomerSuccess: undefined
          }; 

      case DELETE_CUSTOMER_SUCCESS:
        return {
            ...state,
            isDeleteCustomerSuccess: action.payload
          };

      case DELETE_CUSTOMER_ERROR_MESSAGE:
        return {
            ...state,
            deleteCustomerErrorMessage: action.payload
          };    

      case DELETE_CUSTOMER_RESET_FLAG:
        return {
            ...state,
            isDeleteCustomerSuccess: undefined
          }; 

      default:
          return state;
  }
}
  
export default customersReducer;
  