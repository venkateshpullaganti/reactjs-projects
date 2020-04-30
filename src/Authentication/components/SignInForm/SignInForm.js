import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { observable } from "mobx";
// import { observer, inject } from "mobx-react";

// import { Ecommerce_Home_Path } from "../../../Botique/constants/RouteConstants";
// import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperForSignInFrom";

// import {
//     userNameErrorMessage,
//     passwordErrorMessage,
// } from "../../constants/signInConstants";

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
    // @observable userName;
    // @observable password;
    // @observable errorMessage;

    // constructor(props) {
    //     super(props);

    //     this.errorMessage = null;
    //     this.userName = "";
    //     this.password = "";
    //     this.onSuccess = this.onSuccess.bind(this);
    //     this.onFailure = this.onFailure.bind(this);
    // }
    // authStore = () => {
    //     return this.props.authStore;
    // };

    // onChangeUserName = (event) => {
    //     this.userName = event.target.value;
    // };
    // onChangePassword = (event) => {
    //     this.password = event.target.value;
    // };

    // onSubmit = (event) => {
    //     event.preventDefault();

    //     if (this.userName.trim() === "") {
    //         this.errorMessage = userNameErrorMessage;
    //     } else if (this.password === "") {
    //         this.errorMessage = passwordErrorMessage;
    //     } else {
    //         this.errorMessage = null;

    //         this.authStore().userSignIn(this.onSuccess, this.onFailure);
    //     }
    // };

    // onFailure(error) {
    //     this.errorMessage = JSON.parse(error).problem;
    // }
    // onSuccess() {
    //     const { history } = this.props;
    //     history.replace({ pathname: Ecommerce_Home_Path });
    // }

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
