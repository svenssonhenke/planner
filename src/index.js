import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/app.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

let destination = document.querySelector("#root");

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , destination
);