import { combineReducers } from '@reduxjs/toolkit';
import accountsReducer from '../../containers/login/reducer';
import ordersReducer from '../../containers/main/orders/reducer';
import infoCardsReducer from '../../containers/main/reducer';
import customersReducer from '../../containers/main/customers/reducer';
import productsReducer from '../../containers/main/products/reducer';

/**
 * Main reducer
 */

const rootReducer = combineReducers({
    accounts: accountsReducer,
    orders: ordersReducer,
    infoCards: infoCardsReducer,
    customers: customersReducer,
    products: productsReducer
})

export default rootReducer;