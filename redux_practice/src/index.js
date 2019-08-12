import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

//redux dependencies
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import  promiseMiddleware  from 'redux-promise';
import reducers from './reducers'
/**
 * promisemiddleware is going to stop everything until the promise
 * is done then it will return the proper function return from reducer
 * with the actual payload and type
 */

const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

