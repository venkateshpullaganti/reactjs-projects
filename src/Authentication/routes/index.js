import React from "react";
import { Route } from "react-router-dom";

import SignInForm from "../components/SignInForm";
import { SignInForm_PATH } from "../constants/RouteConstants";

const routes = [
    <Route
        key="SignInForm"
        exact
        path={SignInForm_PATH}
        component={SignInForm}
    />,
];

export default routes;
