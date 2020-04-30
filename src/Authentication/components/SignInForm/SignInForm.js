import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { Ecommerce_Home_Path } from "../../../Botique/constants/RouteConstants";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperForSignInFrom";

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
        console.log("sign in", props.component);
        this.errorMessage = null;
        this.userName = "";
        this.password = "";
    }
    authStore = () => {
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

        if (this.userName.trim() === "") {
            this.errorMessage = userNameErrorMessage;
        } else if (this.password === "") {
            this.errorMessage = passwordErrorMessage;
        } else {
            this.errorMessage = null;
            this.authStore().userSignIn();
            setTimeout(() => {
                this.redirectToCalledComponent();
            }, 1000);
        }
    };

    redirectToCalledComponent = () => {
        // const { component: Component } = this.props;
        // console.log(Component);

        // return <Component />;
        const { history } = this.props;
        history.replace({ pathname: Ecommerce_Home_Path });
    };
    setErrorMsg = (error) => {
        console.log(error);

        this.errorMessage = error;
    };

    render() {
        // const {
        //     getUserSignInAPIStatus,
        //     getUserSignInAPIError,
        // } = this.authStore;
        // console.log("status", getUserSignInAPIStatus);

        return (
            <FormContainer>
                <FormStyled>
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
                    <LoginBtn
                        data-testid="sign-in-button"
                        type="submit"
                        onClick={this.onSubmit}
                    >
                        Sign In
                    </LoginBtn>
                    {/* <LoadingWrapperWithFailure
                        apiStatus={getUserSignInAPIStatus}
                        apiError={getUserSignInAPIError}
                        renderSuccessUI={this.redirectToCalledComponent}
                    /> */}
                    <InputAlert>{this.errorMessage}</InputAlert>
                </FormStyled>
            </FormContainer>
        );
    }
}

export default withRouter(SignInForm);

// clearSession = () => {
//     this.authStore().userSignOut();
// };

// /* <button type="button" onClick={this.clearSession}>
//                     Clear Session
//                 </button> */
