import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../../service/requests.js/index.js';
import { 
    actionSetProductsLoading,
    actionSetProducts
} from './actions.js';
import { GET_PRODUCTS } from './constants.js';

/**
 * Products saga
 */

function* getProducts({ payload }) {
    yield put(actionSetProductsLoading(true));

    try {
        const customers = yield call(requests.get, `Products/GetProducts`, payload.queryParams);

        yield put(actionSetProductsLoading(false));
        yield put(actionSetProducts(customers));
    } catch(error) {
        yield put(actionSetProductsLoading(false));
    }
};

export default function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
