//Start point for client side application
import 'babel-polyfill';
import React from "react";
import ReactDom from "react-dom";
import Routs from "./Routs";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducers";
import {renderRoutes} from "react-router-config";
import axios from "axios";
import {BASE_API_REQUEST_URL} from "../service/constant";

const axiosInstance = axios.create({
    baseURL: BASE_API_REQUEST_URL,
});

const store = createStore(reducers, window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routs)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
