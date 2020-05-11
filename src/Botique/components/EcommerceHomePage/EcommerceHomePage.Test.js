import React from "react";
import { render, getByTestId } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route, withRouter } from "react-router-dom";

import ProductService from "../../services/ProductService";
import { ProductStore } from "../../stores/ProductStore";
import { EcommerceHomePageRoute } from "../../routes/EcommerceHomePageRoute";

import AuthStore from "../../../Authentication/stores/AuthStore";
import AuthService from "../../../Authentication/services/AuthService";

import CartStore from "../../../Cart/stores/CartStore";

describe("Ecommerce products page tests", () => {
   let productService;
   let productStore;

   let authService;
   let authStore;

   let cartStore;

   beforeEach(() => {
      productService = new ProductService();
      productStore = new ProductStore(productService);
      authService = new AuthService();
      authStore = new AuthStore(authService);
      cartStore = new CartStore(productStore);
   });
   afterEach(() => {
      jest.resetAllMocks();
   });

   it("Should render given the cart icon", () => {
      const { getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <EcommerceHomePageRoute
               authStore={authStore}
               productStore={productStore}
               cartStore={cartStore}
            />
         </Router>
      );

      const cartOpenIcon = getByTestId("cart-open-button");
      expect(cartOpenIcon).toBeInTheDocument();
   });
});
