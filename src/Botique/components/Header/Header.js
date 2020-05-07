import React, { Component } from "react";
import { observable } from "mobx";

import { HeaderContainer, SignOutBtn, SearchBar } from "./styledComponents";

class Header extends Component {
   @observable searchText;
   constructor(props) {
      super(props);
      this.searchText = "";
   }

   onChangeSearchText = (event) => {
      const { onChangeSearchText } = this.props;
      this.searchText = event.target.value;
      onChangeSearchText(this.searchText);
   };

   render() {
      const { onClickSignOut } = this.props;
      return (
         <HeaderContainer>
            <SignOutBtn data-testid="sign-out-button" onClick={onClickSignOut}>
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

export default Header;
