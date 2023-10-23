import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetch_users} from "../actions/actionCreator";
import {UserList} from "../components/UserList";
const UsersListPage = (props) => {

    useEffect(() => {
        props.fetch_users();
    }, []);

    const header = () => {
        return (
            <Helmet>
                <title>{`${props.users.length} Users loaded`}</title>
                <meta property="og:type" content="Users app"/>
            </Helmet>
        )
    }

    return (
        <div>
            {header()}
            <h1>Here is a list of users</h1>
            <ul>{UserList(props)}</ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {users: state.users}
}

function loadData(store) {
    return store.dispatch(fetch_users());
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetch_users})(UsersListPage)
};