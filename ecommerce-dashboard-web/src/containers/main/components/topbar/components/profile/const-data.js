/**
 * File that stores the constants used in profile component
 */
import { actionSetLogout } from "../../../../../login/actions";

export const profileDropdownItems = [
    {
      id: 1,
      text: 'Logout',
      icon: 'fa-solid fa-right-from-bracket',
      callback: (navigate, dispatch) => {navigate("/"); dispatch(actionSetLogout())}
    }
  ];
  