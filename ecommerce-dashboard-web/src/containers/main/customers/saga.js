import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../../service/requests.js/index.js';
import { 
    actionSetCustomersLoading,
    actionSetCustomers,
    actionEditCustomerSuccess,
    actionEditCustomerErrorMessage,
    actionEditCustomerResetFlag,
    actionDeleteCustomerSuccess,
    actionDeleteCustomerErrorMessage
} from './actions.js';
import { DELETE_CUSTOMER, EDIT_CUSTOMER, GET_CUSTOMERS } from './constants.js';

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
    yield put(actionEditCustomerSuccess(undefined));

    try {
        yield call(requests.update, `Customers/EditCustomer`, payload.body);
        const customers = yield call(requests.get, `Customers/GetCustomers`, payload.queryParams);

        yield put(actionSetCustomersLoading(false));
        yield put(actionSetCustomers(customers));
        yield put(actionEditCustomerSuccess(true));

    } catch(error) {
        yield put(actionEditCustomerSuccess(false));
        yield put(actionEditCustomerErrorMessage(error.response.data));
        yield put(actionSetCustomersLoading(false));
    }
};

function* deleteCustomer({ payload }) {
    yield put(actionSetCustomersLoading(true));
    yield put(actionDeleteCustomerSuccess(undefined));

    try {
        yield call(requests.delete, `Customers/DeleteCustomer`, { 
            customerId: payload.queryParams.customerId
        });
        const customers = yield call(requests.get, `Customers/GetCustomers`, payload.queryParams.customersQueryParams);

        yield put(actionSetCustomersLoading(false));
        yield put(actionSetCustomers(customers));
        yield put(actionDeleteCustomerSuccess(true));

    } catch(error) {
        yield put(actionDeleteCustomerSuccess(false));
        yield put(actionDeleteCustomerErrorMessage(error.response.data));
        yield put(actionSetCustomersLoading(false));
    }
};

export default function* customersSaga() {
  yield takeLatest(GET_CUSTOMERS, getCustomers);
  yield takeLatest(EDIT_CUSTOMER, editCustomer);
  yield takeLatest(DELETE_CUSTOMER, deleteCustomer);
}
