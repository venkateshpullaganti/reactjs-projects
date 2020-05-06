import React from "react";
import { render } from "@testing-library/react";
import { SideBar } from ".";

describe("sidebar tests", () => {
    it("should test buttons render", () => {
        let sampleSizes = ["XS", "M", "XXL"];

        const { getByText, queryByRole, getByRole } = render(
            <SideBar sizes={sampleSizes} />
        );

        getByText(/Sizes/);
        getByRole("button", { name: "XS" });
        queryByRole("button", { name: "M" });
        queryByRole("button", { name: "XXL" });
    });
});
