import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routs from "../client/Routs";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import serialize from 'serialize-javascript';
import {Helmet} from "react-helmet";

const helmet = Helmet.renderStatic();

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <div>{renderRoutes(Routs)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
    <html lang="en">
       <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
       </head>
       <body>
         <div id="root">${content}</div>
         <script>
              window.INITIAL_STATE=${serialize(store.getState())}
         </script>
         <script src="bundle.js"></script>
        </body>
    </html>`;
}