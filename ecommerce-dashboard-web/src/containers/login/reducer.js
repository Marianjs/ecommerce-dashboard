import { CREATE_ACCOUNT,CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR_MESSAGE } from "./constants";

/**
 * New accounts reducer
 */

export const initialState = {
  accounts: []
};

const accountsReducer = (state = {}, action) => {

  switch(action.type) {

      case CREATE_ACCOUNT:
          return {
              ...state,
              account: action.payload
          };

      case CREATE_ACCOUNT_SUCCESS:
          return {
            ...state,
            registerSuccess: action.payload
          };

      case CREATE_ACCOUNT_ERROR_MESSAGE:
          return {
            ...state,
            registerErrorMessage: action.payload
          }

      default:
          return state;
  }
}

export default accountsReducer;
