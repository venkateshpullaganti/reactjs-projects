import React from "react";

import { ProtectedRoute } from "../../common/ProtectedRoute";

import EcommerceHomeRoute from "../components/EcommerceHomePage";
import { Ecommerce_Home_Path } from "../constants/RouteConstants";

const routes = [
    <ProtectedRoute
        key="EcommerceHomeRoute"
        exact
        path={Ecommerce_Home_Path}
        component={EcommerceHomeRoute}
    />,
];

export default routes;
