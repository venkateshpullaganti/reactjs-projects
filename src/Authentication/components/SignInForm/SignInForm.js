import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { setAccessToken, clearUserSession } from "../../../utils/StorageUtils";
import {
    FormContainer,
    FormStyled,
    UsernameField,
    PasswordField,
    LoginBtn,
    Heading,
    NameAlert,
    PasswordAlert,
} from "./styledComponents";

const bool_true = true;
const bool_false = false;

@observer
class SignInForm extends Component {
    @observable userName;
    @observable password;
    @observable shouldShowNameAlert;
    @observable shouldShowpasswordAlert;

    constructor(props) {
        super(props);
        this.shouldShowNameAlert = bool_false;
        this.shouldShowpasswordAlert = bool_false;
        this.userName = "";
        this.password = "";
    }
    evaluateUsernameAndPassword = () => {
        if (this.userName === "") {
            this.shouldShowNameAlert = bool_true;
            return bool_false;
        } else if (this.password === "") {
            this.shouldShowNameAlert = bool_false;
            this.shouldShowpasswordAlert = bool_true;
            return bool_false;
        }
        this.shouldShowNameAlert = bool_false;
        this.shouldShowpasswordAlert = bool_false;

        return bool_true;
    };

    clearSession = () => {
        clearUserSession();
    };
    onSubmit = (event) => {
        event.preventDefault();

        if (this.evaluateUsernameAndPassword()) {
            setAccessToken("This is sample dummy access token.!");
            const { history } = this.props;
            history.replace("/");
        }
    };
    onChangeName = (event) => {
        this.userName = event.target.value;
    };
    onChangePassword = (event) => {
        this.password = event.target.value;
    };

    render() {
        return (
            <FormContainer>
                <FormStyled onSubmit={this.onSubmit}>
                    <Heading>Sign in</Heading>
                    <UsernameField
                        onKeyDown={this.onChangeName}
                        type="text"
                        placeholder="Username"
                    />
                    <PasswordField
                        onKeyDown={this.onChangePassword}
                        type="password"
                        placeholder="Password"
                    />
                    <LoginBtn type="submit">Sign In</LoginBtn>
                    <button type="button" onClick={this.clearSession}>
                        Clear Session
                    </button>
                    <NameAlert show={this.shouldShowNameAlert}>
                        please enter username
                    </NameAlert>
                    <PasswordAlert show={this.shouldShowpasswordAlert}>
                        please enter password
                    </PasswordAlert>
                </FormStyled>
            </FormContainer>
        );
    }
}

export default withRouter(SignInForm);
