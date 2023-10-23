import 'babel-polyfill';
import express from "express";
import {matchRoutes} from "react-router-config";
import Routs from "./client/Routs";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import proxy from 'express-http-proxy';
import {BASE_API_BACKEND_URL, BASE_API_REQUEST_URL, LOCAL_HOST, STATUS_CODE} from "./service/constant";

const app = express();
const {NOT_FOUND, REDIRECT} = STATUS_CODE;

app.use(BASE_API_REQUEST_URL, proxy(BASE_API_BACKEND_URL, {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarder-host'] = LOCAL_HOST;
        return opts;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routs, req.path).map(({route}) =>
        route.loadData ? route.loadData(store) : null)
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(reject);
                })
            }
        });


    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(REDIRECT, context.url);
        }

        if (context.notFound) {
            res.status(NOT_FOUND);
        }

        res.send(content);
    });
})


app.listen(3000, () => {
    console.log('listening on 3000')
})