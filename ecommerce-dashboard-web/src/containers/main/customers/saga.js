import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../../service/requests.js/index.js';
import { 
    actionSetCustomersLoading,
    actionSetCustomers
} from './actions.js';
import { EDIT_CUSTOMER, GET_CUSTOMERS } from './constants.js';

/**
 * Customers saga
 */

function* getCustomers({ payload }) {
    yield put(actionSetCustomersLoading(true));

    try {
        const customers = yield call(requests.get, `Customers/GetCustomers`, payload.queryParams);

        yield put(actionSetCustomersLoading(false));
        yield put(actionSetCustomers(customers));
    } catch(error) {
        yield put(actionSetCustomersLoading(false));
    }
};

function* editCustomer({ payload }) {
    yield put(actionSetCustomersLoading(true));

    try {
        yield call(requests.update, `Customers/EditCustomer`, payload.body);

        yield put(actionSetCustomersLoading(false));
    } catch(error) {
        yield put(actionSetCustomersLoading(false));
    }
};

export default function* customersSaga() {
  yield takeLatest(GET_CUSTOMERS, getCustomers);
  yield takeLatest(EDIT_CUSTOMER, editCustomer);
}
