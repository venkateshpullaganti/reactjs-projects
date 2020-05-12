import { render } from "@testing-library/react";
import React from "react";

import { SubTotal } from ".";

describe("subtotal tests", () => {
   it("Should render subtotoal amount for cart items ", () => {
      const expectedOutput = 7876.34;
      const { getByText } = render(
         <SubTotal totalCartAmount={expectedOutput} />
      );
      getByText(/SUBTOTAL/);
      getByText(/7876.34/);
   });
});
