import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadUsers } from './actions/index';

import setAuthToken from './utils/setAuthToken';

const store = createStore(
    reducers, applyMiddleware(thunk)
)

store.dispatch(loadUsers());

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));