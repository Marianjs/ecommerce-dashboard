import { call, put, takeLatest } from 'redux-saga/effects';
import requests from '../../service/requests.js/index.js';
import { 
    actionCreateAccountLoading, 
    actionCreateAccountToastr,
    actionCreateAccountErrorMessage,
    actionLoginLoading,
    actionLoginToastr,
    actionLoginErrorMessage,
    actionSetLoginResponse,
    actionForgotPasswordLoading,
    actionForgotPasswordToastr,
    actionForgotPasswordErrorMessage,
    actionForgotPasswordCloseModal
} from './actions.js';
import { CREATE_ACCOUNT, LOGIN, FORGOT_PASSWORD, SET_LOGOUT } from './constants.js';

/**
 * Accounts saga
 */

function* createAccount({ payload }) {
    yield put(actionCreateAccountToastr(undefined));
    try {
        yield put(actionCreateAccountLoading(true));
        yield call(requests.create, `Accounts/CreateAccount`, payload.queryParams);
        yield put(actionCreateAccountToastr(true));
        yield put(actionCreateAccountLoading(undefined));
    } catch(error) {
        yield put(actionCreateAccountLoading(undefined));
        yield put(actionCreateAccountToastr(false));
        yield put(actionCreateAccountErrorMessage(error.response.data));
    }
};

function* login({ payload }) {
    yield put(actionLoginToastr(undefined));
    try {
        yield put(actionLoginLoading(true));
        const response = yield call(requests.create, `Accounts/Login`, payload.queryParams);
  
        yield put(actionSetLoginResponse(response));
        yield put(actionLoginToastr(true));
        yield put(actionLoginLoading(undefined));
    } catch(error) {

        yield put(actionLoginLoading(undefined));
        yield put(actionLoginToastr(false));
        yield put(actionLoginErrorMessage(error.response.data));
    }
};

function* forgotPassword({ payload }) {

    yield put(actionForgotPasswordToastr(undefined));
    yield put(actionForgotPasswordCloseModal(false));
    try {
        yield put(actionForgotPasswordLoading(true));
        yield call(requests.get, `Accounts/ForgotPassword`, payload.queryParams);
        yield put(actionForgotPasswordToastr(true));
        yield put(actionForgotPasswordLoading(undefined));
        yield put(actionForgotPasswordCloseModal(true));
    } catch(error) {

        yield put(actionForgotPasswordLoading(undefined));
        yield put(actionForgotPasswordToastr(false));
        yield put(actionForgotPasswordCloseModal(true));
        yield put(actionForgotPasswordErrorMessage(error.response.data));
    }

};

function* setLogout() {
    yield put(actionLoginToastr(undefined));
}

export default function* accountsSaga() {
  yield takeLatest(CREATE_ACCOUNT, createAccount);
  yield takeLatest(LOGIN, login);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(SET_LOGOUT, setLogout);
}
