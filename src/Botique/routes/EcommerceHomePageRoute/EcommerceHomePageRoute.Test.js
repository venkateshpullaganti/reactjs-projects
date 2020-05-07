import React from "react";
import {
   render,
   getByTestId,
   fireEvent,
   waitFor,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import {
   E_COMMERCE_SIGN_IN_PATH,
   E_COMMERCE_PRODUCTS_PATH,
} from "../../../constants/RouteConstants";

import stores from "../../../common/stores";

import { EcommerceHomePageRoute } from ".";

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid="location-display">{location.pathname}</div>
));

describe("Ecommerce home route tests", () => {
   it("should navigate to signin page on signout", () => {
      const history = createMemoryHistory();
      const route = E_COMMERCE_PRODUCTS_PATH;
      history.push(route);

      const { getByTestId, getByRole } = render(
         <Provider {...stores}>
            <Router history={history}>
               <Route path={E_COMMERCE_PRODUCTS_PATH}>
                  <EcommerceHomePageRoute />
               </Route>
               <Route path={E_COMMERCE_SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      );
      const signOutBtn = getByRole("button", { name: "Sign Out" });

      fireEvent.click(signOutBtn);

      expect(getByTestId("location-display")).toHaveTextContent(
         E_COMMERCE_SIGN_IN_PATH
      );
      expect(signOutBtn).not.toBeInTheDocument();
   });
});
