import {API_ROUTS} from "../../service/constant";
import {ACTIONS} from "./action";

const {USERS, CURRENT_USER, ADMINS} = API_ROUTS;
const {FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS} = ACTIONS;

export const fetch_users = () => async (dispatch, getState, api) => {
    const res = await api.get(USERS);

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

export const fetch_current_user = () => async (dispatch, getState, api) => {
    const res = await api.get(CURRENT_USER);

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}


export const fetch_admins = () => async (dispatch, getState, api) => {
    const res = await api.get(ADMINS);

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    })
}