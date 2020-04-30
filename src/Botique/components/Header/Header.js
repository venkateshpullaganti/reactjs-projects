import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";

import { SignInForm_PATH } from "../../../Authentication/constants/RouteConstants";

import { HeaderContainer, SignOutBtn, SearchBar } from "./styledComponents";

class Header extends Component {
    @observable searchText;
    constructor(props) {
        super(props);
        this.searchText = "";
    }
    onClickSignOut = () => {
        const { history } = this.props;
        const { onClickSignOut } = this.props;

        onClickSignOut();
        history.replace(SignInForm_PATH);
    };
    onChangeSearchText = (event) => {
        const { onChangeSearchText } = this.props;
        this.searchText = event.target.value.trim();
        if (this.searchText !== "") onChangeSearchText(this.searchText);
    };
    // onFormSubmit = (event) => {
    //     console.log("submit");
    //     event.preventDefault();
    // };
    render() {
        return (
            <HeaderContainer>
                <SignOutBtn
                    data-testid="sign-out-button"
                    onClick={this.onClickSignOut}
                >
                    Sign Out
                </SignOutBtn>
                <SearchBar
                    type="text"
                    placeholder="Search Products"
                    onChange={this.onChangeSearchText}
                />
            </HeaderContainer>
        );
    }
}

export default withRouter(Header);
