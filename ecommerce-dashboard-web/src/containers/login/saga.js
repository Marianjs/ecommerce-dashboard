import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../service/requests.js/index.js';
import { actionCreateAccountSuccess, actionCreateAccountErrorMessage } from './actions.js';
import { CREATE_ACCOUNT } from './constants.js';

/**
 * New accounts saga
 */

function* createAccount({ payload }) {
    yield put(actionCreateAccountSuccess(undefined));
    try {

        yield call(requests.create, `Accounts/CreateAccount`, payload.queryParams);
        yield put(actionCreateAccountSuccess(true));
    } catch(error) {

        yield put(actionCreateAccountSuccess(false));
        yield put(actionCreateAccountErrorMessage(error.response.data));
    }
};

export default function* accountsSaga() {
  yield takeLatest(CREATE_ACCOUNT, createAccount);
}
