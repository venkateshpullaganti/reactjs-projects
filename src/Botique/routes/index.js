import React from "react";
import { Route } from "react-router-dom";

import EcommerceHomeRoute from "../components/EcommerceHomePage";
import { Ecommerce_Home_Path } from "../constants/RouteConstants";

const routes = [
    <Route
        key="EcommerceHomeRoute"
        exact
        path={Ecommerce_Home_Path}
        component={EcommerceHomeRoute}
    />,
];

export default routes;
