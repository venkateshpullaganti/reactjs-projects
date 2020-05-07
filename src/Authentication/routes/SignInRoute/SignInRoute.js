import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { getUserDisplayableErrorMessage } from "../../../utils/APIUtils";
import { E_COMMERCE_PRODUCTS_PATH } from "../../../constants/RouteConstants";
import {
   userNameErrorMessage,
   passwordErrorMessage,
} from "../../../constants/signInConstants";

import { SignInForm } from "../../components/SignInForm";
import { YES, NO } from "../../constants/SignInConstants";

@inject("authStore")
@observer
class SignInRoute extends Component {
   @observable userName;
   @observable password;
   @observable errorMessage;
   @observable isLoading;

   constructor(props) {
      super(props);

      this.init();
      this.onSuccess = this.onSuccess.bind(this);
      this.onFailure = this.onFailure.bind(this);
   }
   init = () => {
      this.errorMessage = null;
      this.userName = "";
      this.password = "";
      this.isLoading = false;
   };
   authStore = () => {
      return this.props.authStore;
   };

   onChangeUserName = (event) => {
      this.userName = event.target.value;
   };
   onChangePassword = (event) => {
      this.password = event.target.value;
   };

   onSubmit = () => {
      if (this.userName.trim() === "") {
         this.errorMessage = userNameErrorMessage;
      } else if (this.password === "") {
         this.errorMessage = passwordErrorMessage;
      } else {
         this.errorMessage = null;
         this.isLoading = YES;
         this.authStore().userSignIn({}, this.onSuccess, this.onFailure);
      }
   };

   onFailure(APIError) {
      // const error = getUserDisplayableErrorMessage(APIError);
      this.isLoading = NO;
      this.errorMessage = "NETWORK_ERROR";
   }
   onSuccess() {
      this.isLoading = NO;
      const { history } = this.props;
      // const { state } = this.props.location;
      // state !== undefined
      //     ? history.replace({ pathname: state.from })
      //     : history.replace({ pathname: E_COMMERCE_PRODUCTS_PATH });
      history.replace({ pathname: E_COMMERCE_PRODUCTS_PATH });
   }

   render() {
      const {
         onChangeUserName,
         onChangePassword,
         onSubmit,
         userName,
         password,
         isLoading,
         errorMessage,
      } = this;
      return (
         <SignInForm
            onChangeUserName={onChangeUserName}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}
            errorMessage={errorMessage}
            userName={userName}
            password={password}
            isLoading={isLoading}
         />
      );
   }
}

export default withRouter(SignInRoute);
