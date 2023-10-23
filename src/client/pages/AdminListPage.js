import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetch_admins} from "../actions/actionCreator";
import requireAuth from "../components/hocs/requireAuth";
import {AdminList} from "../components/AdminList";

const AdminsListPage = (props) => {

    useEffect(() => {
        fetch_admins()
    }, [])



    return <div>
        <h3>Protected List of admins</h3>
        <ul>
            {AdminList()}
        </ul>
    </div>
}

function mapStateToProps({admins}) {
    return {admins}
}

export default {
    component: connect(mapStateToProps, {fetch_admins})(requireAuth(AdminsListPage)),
    loadData: ({dispatch}) => dispatch(fetch_admins())
}