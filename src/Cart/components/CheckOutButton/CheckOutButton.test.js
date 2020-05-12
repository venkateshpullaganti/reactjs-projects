import React from "react";
import { render } from "@testing-library/react";

import CheckOutButton from ".";

describe("Checkout Button tests", () => {
   it("should render checkout button", () => {
      const { getByRole } = render(<CheckOutButton />);
      getByRole("button", { name: "CHECKOUT" });
   });
});
