import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { composeWithDevTools } from 'remote-redux-devtools';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadUsers } from './actions/index';

import setAuthToken from './utils/setAuthToken';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, composeEnhancers(applyMiddleware(thunk))
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