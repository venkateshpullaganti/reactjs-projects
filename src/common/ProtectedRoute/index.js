import React from "react";
import { Route, Redirect } from "react-router-dom";

import { SignInForm_PATH } from "../../Authentication/constants/RouteConstants";
import { isLoggedIn } from "../../utils/AuthUtils";

// function ProtectedRoute(props) {
//     const { component: Component, ...rest } = props;
//     if (isLoggedIn()) return <Route component={Component} {...rest} />;
//     else return <Redirect to={{ pathname: SignInForm_PATH }} />;
// }

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={() =>
//             isLoggedIn() ? <Component /> : <Redirect to={SignInForm_PATH} />
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
                        pathname: SignInForm_PATH,
                        state: { from: path },
                    }}
                />
            )
        }
    />
);
export { ProtectedRoute };
