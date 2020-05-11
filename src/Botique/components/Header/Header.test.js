import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Header from "./index";

describe("Header tests", () => {
   it("Should render button and searchbar", () => {
      const { getAllByPlaceholderText, getByTestId } = render(<Header />);
      getByTestId("sign-out-button");
      getAllByPlaceholderText("Search Products");
   });

   it("should render the search text", () => {
      const expectedOutput = "test-searchtext";
      const { getByPlaceholderText, getByDisplayValue, debug } = render(
         <Header onChangeSearchText={() => {}} />
      );
      const searchBar = getByPlaceholderText("Search Products");

      fireEvent.change(searchBar, { target: { value: "test-searchtext" } });

      getByDisplayValue(expectedOutput);
   });
});
