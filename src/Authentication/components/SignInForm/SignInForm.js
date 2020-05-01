import React, { Component } from "react";

import {
    FormContainer,
    FormStyled,
    UsernameField,
    PasswordField,
    LoginBtn,
    Heading,
    InputAlert,
} from "./styledComponents";

class SignInForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit();
    };
    render() {
        const { onChangeUserName, onChangePassword, errorMessage } = this.props;
        return (
            <FormContainer>
                <FormStyled onSubmit={this.onSubmit}>
                    <Heading>Sign in</Heading>
                    <UsernameField
                        onChange={onChangeUserName}
                        type="text"
                        placeholder="Username"
                    />
                    <PasswordField
                        onChange={onChangePassword}
                        type="password"
                        placeholder="Password"
                    />
                    <LoginBtn data-testid="sign-in-button" type="submit">
                        Sign In
                    </LoginBtn>

                    <InputAlert>{errorMessage}</InputAlert>
                </FormStyled>
            </FormContainer>
        );
    }
}

export { SignInForm };

// clearSession = () => {
//     this.authStore().userSignOut();
// };

// /* <button type="button" onClick={this.clearSession}>
//                     Clear Session
//                 </button> */
