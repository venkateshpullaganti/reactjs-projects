import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { Ecommerce_Home_Path } from "../../../Botique/constants/RouteConstants";
import {
    userNameErrorMessage,
    passwordErrorMessage,
} from "../../constants/signInConstants";

import { SignInForm } from "../../components/SignInForm";

@inject("authStore")
@observer
class SignInRoute extends Component {
    @observable userName;
    @observable password;
    @observable errorMessage;

    constructor(props) {
        super(props);

        this.errorMessage = null;
        this.userName = "";
        this.password = "";
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
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

            this.authStore().userSignIn(this.onSuccess, this.onFailure);
        }
    };

    onFailure(error) {
        this.errorMessage = JSON.parse(error).problem;
    }
    onSuccess() {
        const { history } = this.props;
        history.replace({ pathname: Ecommerce_Home_Path });
    }

    render() {
        return (
            <SignInForm
                onChangeUserName={this.onChangeUserName}
                onChangePassword={this.onChangePassword}
                onSubmit={this.onSubmit}
                errorMessage={this.errorMessage}
            />
        );
    }
}

export default withRouter(SignInRoute);
