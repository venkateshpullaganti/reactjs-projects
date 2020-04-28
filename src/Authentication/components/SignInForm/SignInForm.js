import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { Ecommerce_Home_Path } from "../../../Botique/constants/RouteConstants";

import {
    userNameErrorMessage,
    passwordErrorMessage,
    bool_true,
    bool_false,
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
import { getAccessToken } from "../../../utils/StorageUtils";

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
    evaluateUsernameAndPassword = () => {
        if (this.userName === "") {
            this.errorMessage = userNameErrorMessage;
            return bool_false;
        } else if (this.password === "") {
            this.errorMessage = passwordErrorMessage;
            return bool_false;
        }
        this.errorMessage = null;
        return bool_true;
    };
    onSubmit = (event) => {
        event.preventDefault();

        if (this.evaluateUsernameAndPassword()) {
            this.verifySignIn();
        }
    };
    verifySignIn = () => {
        const timeout = 1000;
        this.getAuthStore().userSignIn();
        setTimeout(() => {
            this.redirectToEcommercePage();
        }, timeout);
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
