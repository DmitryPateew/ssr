import React from "react";
import {renderRoutes} from 'react-router-config';
import Header from "./components/Header";
import {fetch_current_user} from "./actions/actionCreator";

const App = ({route}) => {
    return <div>
        <Header/>
        {renderRoutes(route.routes)}
    </div>;
};

export default {
    component: App,
    loadData: ({dispatch}) => dispatch(fetch_current_user())
}