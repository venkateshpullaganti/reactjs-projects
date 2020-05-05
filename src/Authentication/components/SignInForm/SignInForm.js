import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import ReactLoading from "react-loading";

import {
    FormContainer,
    FormStyled,
    UsernameField,
    PasswordField,
    LoginBtn,
    Heading,
    InputAlert,
} from "./styledComponents";

@observer
class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.isLoading = false;
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit();
    };
    render() {
        const {
            onChangeUserName,
            onChangePassword,
            errorMessage,
            userName,
            password,
            isLoading,
        } = this.props;
        return (
            <FormContainer>
                <FormStyled onSubmit={this.onSubmit}>
                    <Heading>Sign in</Heading>
                    <UsernameField
                        onChange={onChangeUserName}
                        type="text"
                        placeholder="Username"
                        value={userName}
                    />
                    <PasswordField
                        onChange={onChangePassword}
                        type="password"
                        placeholder="Password"
                        value={password}
                    />
                    <LoginBtn
                        data-testid="sign-in-button"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ReactLoading
                                type="spin"
                                width="20px"
                                height="20px"
                                alt="loader"
                            />
                        ) : (
                            "Sign in"
                        )}
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
