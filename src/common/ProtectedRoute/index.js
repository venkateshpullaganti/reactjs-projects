import React from "react";
import { Route, Redirect } from "react-router-dom";

import { E_COMMERCE_SIGN_IN_PATH } from "../../constants/RouteConstants";
import { isLoggedIn } from "../../utils/AuthUtils";

// function ProtectedRoute(props) {
//     const { component: Component, ...rest } = props;
//     if (isLoggedIn()) return <Route component={Component} {...rest} />;
//     else return <Redirect to={{ pathname: E_COMMERCE_SIGN_IN_PATH }} />;
// }

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={() =>
//             isLoggedIn() ? <Component /> : <Redirect to={E_COMMERCE_SIGN_IN_PATH} />
//         }
//     />
// );

const ProtectedRoute = ({ component: Component, path, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: E_COMMERCE_SIGN_IN_PATH,
                        state: { from: path },
                    }}
                />
            )
        }
    />
);
export { ProtectedRoute };
