import { useDispatch } from "react-redux";
import { selectLoginToastr } from "../../containers/login/selectors";
import { useCallback } from "react";

/**
 * Function used to validate an email from an input filed
 * Receives the email as parameter
 */
export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const useHandleClick = (callback, navigate) => {
    const dispatch = useDispatch();
  
    const handleClick = useCallback(() => {
      callback(navigate);
      dispatch(selectLoginToastr(false));
    }, [callback, navigate, dispatch]);
  
    return handleClick;
};
