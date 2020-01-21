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
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import setAuthToken from './utils/setAuthToken';
import { auth } from './components/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'authType',
    storage: storage,
    whitelist: [reducers]
};

const pReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    pReducer, composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(store);

store.dispatch(loadUsers());

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    auth.authenticate();
} 

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));