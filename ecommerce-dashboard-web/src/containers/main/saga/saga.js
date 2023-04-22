import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../../service/requests.js/index.js';
import { 
    actionSetRevenueInfoCard, 
    actionSetRevenueInfoCardLoading,
    actionSetTotalOrdersInfoCard,
    actionSetTotalOrdersInfoCardLoading
} from '../actions.js';
import { GET_REVENUE_INFO_CARD, GET_TOTAL_ORDERS_INFO_CARD } from '../constants.js';

/**
 * Info cards saga
 */

function* getRevenueInfoCard() {
    yield put(actionSetRevenueInfoCardLoading(true));

    try {
        const orders = yield call(requests.get, `CardsInfo/GetRevenueInfoCard`);

        yield put(actionSetRevenueInfoCardLoading(false));
        yield put(actionSetRevenueInfoCard(orders));
    } catch(error) {
        yield put(actionSetRevenueInfoCardLoading(false));
    }
};

function* getTotalOrdersInfoCard() {
    yield put(actionSetTotalOrdersInfoCardLoading(true));

    try {
        const orders = yield call(requests.get, `CardsInfo/GetTotalOrdersInfoCard`);

        yield put(actionSetTotalOrdersInfoCardLoading(false));
        yield put(actionSetTotalOrdersInfoCard(orders));
    } catch(error) {
        yield put(actionSetTotalOrdersInfoCardLoading(false));
    }
};

export default function* infoCardsSaga() {
  yield takeLatest(GET_REVENUE_INFO_CARD, getRevenueInfoCard);
  yield takeLatest(GET_TOTAL_ORDERS_INFO_CARD, getTotalOrdersInfoCard);
}
