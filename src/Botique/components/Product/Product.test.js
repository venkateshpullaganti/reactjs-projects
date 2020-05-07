import React from "react";
import { render, getByAltText } from "@testing-library/react";

import getProductsResponse from "../../../fixtures/getProductsResponse.json";

import { Product } from "./Product";

describe("Product tests", () => {
   it("should test all the product details", () => {
      const testProduct = getProductsResponse[0];
      const { getByText, debug, getByAltText } = render(
         <Product product={testProduct} />
      );

      getByText(/Free shipping/);
      getByAltText(testProduct.title);

      getByText(testProduct.title);
      getByText(testProduct.currencyFormat);
      getByText(testProduct.price.toString());
      // debug();
   });
});
