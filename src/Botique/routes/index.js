import React from "react";

import { ProtectedRoute } from "../../common/ProtectedRoute";

import { EcommerceHomePageRoute } from "./EcommerceHomePageRoute";
import { E_COMMERCE_PRODUCTS_PATH } from "../../constants/RouteConstants";

const routes = [
    <ProtectedRoute
        key="EcommerceHomeRoute"
        exact
        path={E_COMMERCE_PRODUCTS_PATH}
        component={EcommerceHomePageRoute}
    />,
];

export default routes;
