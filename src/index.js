import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import Router from './router'

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
