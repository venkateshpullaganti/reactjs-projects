import React from "react";
import { Route, Redirect } from "react-router-dom";

import { SignInForm_PATH } from "../../Authentication/constants/RouteConstants";
import { isLoggedIn } from "../../utils/AuthUtils";

function ProtectedRoute(props) {
    const { component: Component, ...others } = props;
    if (isLoggedIn()) return <Route component={Component} {...others} />;
    else return <Redirect to={{ pathname: SignInForm_PATH }} />;
}

export { ProtectedRoute };
