import { combineReducers } from '@reduxjs/toolkit';
import accountsReducer from '../../containers/login/reducer';
import ordersReducer from '../../containers/main/orders/reducer';

/**
 * Main reducer
 */

const rootReducer = combineReducers({
    accounts: accountsReducer,
    orders: ordersReducer
})

export default rootReducer;