import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { Ecommerce_Home_Path } from "../../../Botique/constants/RouteConstants";

import {
    userNameErrorMessage,
    passwordErrorMessage,
} from "../../constants/signInConstants";

import {
    FormContainer,
    FormStyled,
    UsernameField,
    PasswordField,
    LoginBtn,
    Heading,
    InputAlert,
} from "./styledComponents";

@inject("authStore")
@observer
class SignInForm extends Component {
    @observable userName;
    @observable password;
    @observable errorMessage;

    constructor(props) {
        super(props);

        this.errorMessage = null;
        this.userName = "";
        this.password = "";
    }
    getAuthStore = () => {
        return this.props.authStore;
    };

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    };
    onChangePassword = (event) => {
        this.password = event.target.value;
    };

    onSubmit = (event) => {
        event.preventDefault();
        const timeout = 1000;

        if (this.userName.trim() === "") {
            this.errorMessage = userNameErrorMessage;
        } else if (this.password === "") {
            this.errorMessage = passwordErrorMessage;
        } else {
            this.errorMessage = null;
            this.getToken();
            setTimeout(() => {
                this.redirectToEcommercePage();
            }, timeout);
        }
    };
    getToken = () => {
        this.getAuthStore().userSignIn();
    };

    redirectToEcommercePage = () => {
        const { history } = this.props;
        history.replace({ pathname: Ecommerce_Home_Path });
    };

    render() {
        return (
            <FormContainer>
                <FormStyled onSubmit={this.onSubmit}>
                    <Heading>Sign in</Heading>
                    <UsernameField
                        onChange={this.onChangeUserName}
                        type="text"
                        placeholder="Username"
                    />
                    <PasswordField
                        onChange={this.onChangePassword}
                        type="password"
                        placeholder="Password"
                    />
                    <LoginBtn data-testid="sign-in-button" type="submit">
                        Sign In
                    </LoginBtn>
                    <InputAlert>{this.errorMessage}</InputAlert>
                </FormStyled>
            </FormContainer>
        );
    }
}

export default withRouter(SignInForm);

// clearSession = () => {
//     this.getAuthStore().userSignOut();
// };

// /* <button type="button" onClick={this.clearSession}>
//                     Clear Session
//                 </button> */
