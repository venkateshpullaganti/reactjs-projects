import React from "react";
import { render } from "@testing-library/react";

import { SignInForm } from ".";

describe("Sign in form tests", () => {
    it("should render given name", () => {
        let expectedOutput = "tester-name";
        const { getByPlaceholderText } = render(
            <SignInForm userName={expectedOutput} onChangeUserName={() => {}} />
        );
        const UsernameField = getByPlaceholderText("Username");
        expect(UsernameField.value).toBe(expectedOutput);
    });

    it("should render the given password", () => {
        let expectedOutput = "tester-password";
        const { getByPlaceholderText } = render(
            <SignInForm password={expectedOutput} onChangePassword={() => {}} />
        );
        const actualOutput = getByPlaceholderText("Password").value;
        expect(actualOutput).toBe(expectedOutput);
    });

    it("should render the given error", () => {
        const { getByText } = render(
            <SignInForm errorMessage="Invalid Username" />
        );

        getByText(/Invalid Username/i);
    });
});
