import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ReactLoading from 'react-loading'

import { SIGN_IN_TEXT } from '../../constants/SignInConstants'

import {
   FormContainer,
   FormStyled,
   UsernameField,
   PasswordField,
   LoginBtn,
   Heading,
   InputAlert
} from './styledComponents'

// const DisplayMessage = props => {
//    return <div>{this.props.children}</div>
// }

export const SignInBtn = props => (
   <LoginBtn
      data-testid='sign-in-button'
      type='submit'
      disabled={props.isLoading}
      width={props.width}
      background={props.background}
   >
      {props.isLoading ? (
         <ReactLoading type='spin' width='20px' height='20px' alt='loader' />
      ) : (
         props.displayText ?? SIGN_IN_TEXT
      )}
   </LoginBtn>
)

export const UsernameInput = React.forwardRef((props, ref) => (
   <UsernameField
      ref={ref}
      onChange={props.onChangeUserName}
      type='text'
      placeholder='Username'
      value={props.value}
   />
))

export const PasswordInput = React.forwardRef((props, ref) => (
   <PasswordField
      ref={ref}
      onChange={props.onChangePassword}
      type='password'
      placeholder='Password'
      value={props.value}
   />
))

@observer
class SignInForm extends Component {
   usernameRef = React.createRef()
   passwordRef = React.createRef()

   constructor(props) {
      super(props)

      this.isLoading = false
   }
   componentDidMount() {
      this.usernameRef.current.focus()
   }
   onSubmit = event => {
      event.preventDefault()
      const { onSubmit } = this.props
      onSubmit()
   }
   renderLoginButton = () => {
      const { isLoading } = this.props
      return <SignInBtn isLoading={isLoading} />
   }
   render() {
      const {
         onChangeUserName,
         onChangePassword,
         errorMessage,
         userName,
         password
      } = this.props
      return (
         <FormContainer>
            <FormStyled onSubmit={this.onSubmit}>
               <Heading>Sign in</Heading>
               <UsernameInput
                  ref={this.usernameRef}
                  onChangeUserName={onChangeUserName}
                  value={userName}
               />
               <PasswordInput
                  ref={this.passwordRef}
                  onChangePassword={onChangePassword}
                  value={password}
               />

               {this.renderLoginButton()}

               <InputAlert>{errorMessage}</InputAlert>
            </FormStyled>
         </FormContainer>
      )
   }
}

export { SignInForm }
