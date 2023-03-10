import { 
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_LOADING, 
  CREATE_ACCOUNT_TOASTR,
  CREATE_ACCOUNT_ERROR_MESSAGE, 
  LOGIN_LOADING,
  LOGIN_TOASTR,
  LOGIN_ERROR_MESSAGE,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_TOASTR,
  FORGOT_PASSWORD_ERROR_MESSAGE,
  FORGOT_PASSWORD_CLOSE_MODAL
} from "./constants";

/**
 * Accounts reducer
 */

export const initialState = {
  accounts: []
};

const accountsReducer = (state = initialState, action) => {

  switch(action.type) {

      case CREATE_ACCOUNT:
          return {
              ...state,
              account: action.payload
          };

      case CREATE_ACCOUNT_LOADING:
          return {
            ...state,
            registerLoading: action.payload
          };

      case CREATE_ACCOUNT_TOASTR:
        return {
            ...state,
            registerToastr: action.payload
          };

      case CREATE_ACCOUNT_ERROR_MESSAGE:
          return {
            ...state,
            registerErrorMessage: action.payload
          };

      case LOGIN_LOADING:
          return {
            ...state,
            loginLoading: action.payload
          };
  
      case LOGIN_TOASTR:
          return {
            ...state,
            loginToastr: action.payload
          };
  
      case LOGIN_ERROR_MESSAGE:
          return {
            ...state,
            loginErrorMessage: action.payload
          };

      case FORGOT_PASSWORD_LOADING:
          return {
            ...state,
            forgotPasswordLoading: action.payload
          };
  
      case FORGOT_PASSWORD_TOASTR:
          return {
            ...state,
            forgotPasswordToastr: action.payload
          };
  
      case FORGOT_PASSWORD_ERROR_MESSAGE:
          return {
            ...state,
            forgotPasswordErrorMessage: action.payload
          };

      case FORGOT_PASSWORD_CLOSE_MODAL:
          return {
            ...state,
            forgotPasswordCloseModal: action.payload
          };

      default:
          return state;
  }
}

export default accountsReducer;
