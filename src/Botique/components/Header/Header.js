import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { HeaderStyled, SignOutBtn } from "./styledComponents";

class Header extends Component {
    onClickSignOut = () => {
        const { onClickSignOut } = this.props;
        onClickSignOut();
        const { history } = this.props;
        history.replace("/login");
    };
    render() {
        return (
            <HeaderStyled>
                <SignOutBtn onClick={this.onClickSignOut}>Sign Out</SignOutBtn>
            </HeaderStyled>
        );
    }
}

export default withRouter(Header);
