import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './redux/reducers';
import middleware from './redux/middleware';
import {Provider} from 'react-redux';


const initialState = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : {};

const store = createStore(rootReducer, initialState, middleware);

store.subscribe(() => {
    localStorage.setItem('contacts', JSON.stringify(store.getState()))
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
