import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducers from "../client/reducers";
import axios from "axios";
import {BASE_API_BACKEND_URL} from "../service/constant";

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: BASE_API_BACKEND_URL,
        headers: {cookie: req.get('cookie') || ''}
    })
    return createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance)));
}