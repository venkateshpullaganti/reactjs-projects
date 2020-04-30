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
    render() {
        const {
            onChangeUserName,
            onChangePassword,
            onSubmit,
            errorMessage,
        } = this.props;
        return (
            <FormContainer>
                <FormStyled>
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
                    <LoginBtn
                        data-testid="sign-in-button"
                        type="button"
                        onClick={onSubmit}
                    >
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
