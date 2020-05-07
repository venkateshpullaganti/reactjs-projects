import React from "react";
import { render } from "@testing-library/react";

import ProductSort from ".";

describe("Product sort test cases", () => {
   it("should render dropdown and no.ofProducts displayed", () => {
      const noOfProductsDisplayed = 56;
      const { getByText } = render(
         <ProductSort totalNoOfProductsDisplayed={noOfProductsDisplayed} />
      );
      getByText(/56/);
      getByText(/Select/);
      getByText(/Lowest to highest/);
      getByText(/Highest to lowest/);
   });
});
