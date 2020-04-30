import React from "react";
import { Route } from "react-router-dom";

import { SignInRoute } from "./SignInRoute";
import { SignInForm_PATH } from "../constants/RouteConstants";

const routes = [
    <Route
        key="SignInForm"
        exact
        path={SignInForm_PATH}
        component={SignInRoute}
    />,
];

export default routes;
