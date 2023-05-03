/**
 * Products reducer
 */

import { 
  SET_PRODUCTS,
  SET_PRODUCTS_LOADING
} from "./constants";

export const initialState = {
  products: [],
  productsCount: 0
};
  
const productsReducer = (state = initialState, action) => {

  switch(action.type) {

      case SET_PRODUCTS:
          return {
              ...state,
              products: action.payload.data,
              productsCount: action.payload.dataCount
          };

      case SET_PRODUCTS_LOADING:
        return {
            ...state,
            productsLoading: action.payload
          };

      default:
          return state;
  }
}
  
export default productsReducer;
  