import React from "react";
import { render } from "@testing-library/react";

import CartStore from ".";
import productStore from "../../../Botique/stores";

describe("CartStore tests", () => {
    let cartStore;
    beforeEach(() => {
        cartStore = new CartStore(productStore);
    });
    it("should test the clearStore function", () => {});
});
