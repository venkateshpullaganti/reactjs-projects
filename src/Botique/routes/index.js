import React from "react";

import { ProtectedRoute } from "../../common/ProtectedRoute";

import EcommerceHomeRoute from "../components/EcommerceHomePage";
import { E_COMMERCE_PRODUCTS_PATH } from "../../constants/RouteConstants";

const routes = [
    <ProtectedRoute
        key="EcommerceHomeRoute"
        exact
        path={E_COMMERCE_PRODUCTS_PATH}
        component={EcommerceHomeRoute}
    />,
];

export default routes;
