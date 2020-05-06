import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from ".";

describe("Header tests", () => {
    // it("Should display button and searchbar", () => {
    //     const { getAllByPlaceholderText, getByTestId } = render(
    //         <Router history={createMemoryHistory()}>
    //             <Header />
    //         </Router>
    //     );
    //     // getByTestId("sign-out-button").toBeInTheDocument();
    //     getAllByPlaceholderText("Search Products").toBeInTheDocument();
    // });

    it("should render the search text", () => {
        const expectedOutput = "test-searchtext";
        const { getByPlaceholderText, getByDisplayValue } = render(
            <Router history={createMemoryHistory()}>
                <Header onChangeSearchText={() => {}} />
            </Router>
        );

        const searchBar = getByPlaceholderText("Search Products");

        fireEvent.change(searchBar, { target: { value: "test-searchtext" } });

        getByDisplayValue(expectedOutput);
    });
});
