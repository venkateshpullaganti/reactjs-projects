import React from "react";
import { render, getByTestId } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route, withRouter } from "react-router-dom";

import ProductService from "../../services/ProductService";
import { ProductStore } from "../../stores/ProductStore";
import { EcommerceHomePageRoute } from "../../routes/EcommerceHomePageRoute";

describe("Ecommerce products page tests", () => {
    let productService;
    let productStore;

    let authService;
    let authStore;

    let cartStore;

    beforeEach(() => {
        productService = new ProductService();
        productStore = new ProductStore(productService);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("Should render given the cart icon", () => {
        const { getByTestId } = render(
            <Router history={createMemoryHistory()}>
                <EcommerceHomePageRoute productStore={productStore} />
            </Router>
        );

        const cartOpenIcon = getByTestId("cart-open-button");
        expect(cartOpenIcon).toBeInTheDocument();
    });
});
