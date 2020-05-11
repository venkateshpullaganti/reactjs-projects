import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SizeBtn from "./";

describe("Sign in Button tests", () => {
   it("should test the sign in button render", () => {
      const { getByText, getByRole } = render(<SizeBtn size="M" />);

      const btn = getByRole("button", { name: "M" });
   });
});
