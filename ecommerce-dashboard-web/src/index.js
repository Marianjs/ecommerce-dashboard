import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './service/redux/reducers';
import createSagaMiddleware from 'redux-saga';
import accountsSaga from './containers/login/saga';
import './styles.css';
import ordersSaga from './containers/main/orders/saga';
import infoCardsSaga from './containers/main/saga/saga';
import customersSaga from './containers/main/customers/saga';
import productsSaga from './containers/main/products/saga';

/**
 * added redux store and injected saga to App
 */

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

const sagas = [
  accountsSaga, 
  ordersSaga, 
  infoCardsSaga,
  customersSaga,
  productsSaga
];

sagas.forEach((saga) => sagaMiddleware.run(saga));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
