import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../../service/requests.js/index.js';
import { 
    actionSetOrdersLoading,
    actionSetOrders
} from './actions.js';
import { GET_ORDERS } from './constants.js';

/**
 * Orders saga
 */

function* getOrders({ payload }) {
    yield put(actionSetOrdersLoading(true));

    try {
        const orders = yield call(requests.get, `Orders/GetOrders`, payload.queryParams);

        yield put(actionSetOrdersLoading(false));
        yield put(actionSetOrders(orders));
    } catch(error) {
        yield put(actionSetOrdersLoading(false));
    }
};

export default function* ordersSaga() {
  yield takeLatest(GET_ORDERS, getOrders);
}
