import React from 'react'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import '../../../styles/tailwind.css'

import { SignInBtn } from './SignInForm'

export default {
   component: SignInBtn,
   title: 'Buttons/SignIn Button'
}
export const defaultView = () => <SignInBtn width={90} />

export const loadingView = () => <SignInBtn isLoading={true} width={90} />

export const knobs = () => (
   <SignInBtn
      isLoading={boolean('Is Loading', false)}
      displayText={text('Display Text', 'Sign In')}
      width={number('Width', 90)}
      background={color('Background Color', 'black')}
   />
)
knobs.story = {
   decorators: [withKnobs]
}
