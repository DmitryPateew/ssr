import React from "react";
import HomePage from "./pages/HomePage";
import UsersList from "./pages/UsersListPage";
import App from "./app";
import NotFoundPage from "./pages/NotFoundPage";
import AdminList from "./pages/AdminListPage";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users',
                exact: true
            },
            {
                ...AdminList,
                path: '/admins',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

