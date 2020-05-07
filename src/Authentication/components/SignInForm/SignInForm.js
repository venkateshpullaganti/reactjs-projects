import React, { Component } from "react";
import { observer } from "mobx-react";
import ReactLoading from "react-loading";

import { SIGN_IN_TEXT } from "../../constants/SignInConstants";

import {
   FormContainer,
   FormStyled,
   UsernameField,
   PasswordField,
   LoginBtn,
   Heading,
   InputAlert,
} from "./styledComponents";

@observer
class SignInForm extends Component {
   constructor(props) {
      super(props);

      this.isLoading = false;
   }
   onSubmit = (event) => {
      event.preventDefault();
      const { onSubmit } = this.props;
      onSubmit();
   };
   renderLoginButton = () => {
      const { isLoading } = this.props;
      return (
         <LoginBtn
            data-testid="sign-in-button"
            type="submit"
            disabled={isLoading}
         >
            {isLoading ? (
               <ReactLoading
                  type="spin"
                  width="20px"
                  height="20px"
                  alt="loader"
               />
            ) : (
               SIGN_IN_TEXT
            )}
         </LoginBtn>
      );
   };
   render() {
      const {
         onChangeUserName,
         onChangePassword,
         errorMessage,
         userName,
         password,
      } = this.props;
      return (
         <FormContainer>
            <FormStyled onSubmit={this.onSubmit}>
               <Heading>Sign in</Heading>
               <UsernameField
                  onChange={onChangeUserName}
                  type="text"
                  placeholder="Username"
                  value={userName}
               />
               <PasswordField
                  onChange={onChangePassword}
                  type="password"
                  placeholder="Password"
                  value={password}
               />
               {this.renderLoginButton()}

               <InputAlert>{errorMessage}</InputAlert>
            </FormStyled>
         </FormContainer>
      );
   }
}

export { SignInForm };
