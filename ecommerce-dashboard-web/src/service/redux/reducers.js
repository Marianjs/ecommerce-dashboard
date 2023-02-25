import { combineReducers } from '@reduxjs/toolkit';
import accountsReducer from '../../containers/login/reducer';

/**
 * Main reducer
 */

const rootReducer = combineReducers({
    accounts: accountsReducer
})

export default rootReducer;