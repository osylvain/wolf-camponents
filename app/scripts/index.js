import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app'

import configureStore from './store/configureStore';

import './../styles/style.scss'

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('seed-root')
);
