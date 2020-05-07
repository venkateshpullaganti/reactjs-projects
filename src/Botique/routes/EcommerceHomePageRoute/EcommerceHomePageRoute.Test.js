// import React from "react";
// import { render, getByTestId } from "@testing-library/react";
// import { createMemoryHistory } from "history";

// import {
//    E_COMMERCE_SIGN_IN_PATH,
//    E_COMMERCE_PRODUCTS_PATH,
// } from "../../../constants/RouteConstants";

// import stores from "../../../common/stores";

// import { EcommerceHomePageRoute } from ".";

// describe("Ecommerce home route tests", () => {
//    it("should navigate to signin page on signout", () => {
//       const history = createMemoryHistory();
//       const route = E_COMMERCE_PRODUCTS_PATH;
//       history.push(route);

//       const { getByTestId, getByPlaceholderText } = render(
//          <Provider authStore={authStore}>
//             <Router history={history}>
//                <Route path={E_COMMERCE_PRODUCTS_PATH}>
//                   <EcommerceHomePageRoute />
//                </Route>
//                <Route path={E_COMMERCE_SIGN_IN_PATH}>
//                   <LocationDisplay />
//                </Route>
//             </Router>
//          </Provider>
//       );
//    });
// });
