import React from "react";
import { render } from "@testing-library/react";
import SizeBtn from "./";

describe("Sign in Button tests", () => {
   it("should test the sign in button render", () => {
      const { getByText, getByRole } = render(<SizeBtn size="M" />);

      getByRole("button", { name: "M" });
   });
});
