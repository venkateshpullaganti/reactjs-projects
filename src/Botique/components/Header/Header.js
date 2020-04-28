import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignInForm_PATH } from "../../../Authentication/constants/RouteConstants";

import { HeaderStyled, SignOutBtn } from "./styledComponents";

class Header extends Component {
    onClickSignOut = () => {
        const { history } = this.props;
        const { onClickSignOut } = this.props;

        onClickSignOut();
        history.replace(SignInForm_PATH);
    };
    render() {
        return (
            <HeaderStyled>
                <SignOutBtn
                    data-testid="sign-out-button"
                    onClick={this.onClickSignOut}
                >
                    Sign Out
                </SignOutBtn>
            </HeaderStyled>
        );
    }
}

export default withRouter(Header);
