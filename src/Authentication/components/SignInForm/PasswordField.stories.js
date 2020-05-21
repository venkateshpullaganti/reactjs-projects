import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { PasswordInput } from './SignInForm'

export default {
   component: PasswordInput,
   title: 'Forms/Password Field'
}

export const defaultView = () => <PasswordInput />

export const knob = () => (
   <PasswordInput value={text('UserName', 'Sample Password')} />
)

knob.story = {
   decorators: [withKnobs]
}
