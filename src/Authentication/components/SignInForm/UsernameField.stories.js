import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { UsernameInput } from './SignInForm'

export default {
   component: UsernameInput,
   title: 'Forms/Username Field'
}

export const defaultView = () => <UsernameInput />

export const knob = () => (
   <UsernameInput value={text('UserName', 'Sample Username')} />
)

knob.story = {
   decorators: [withKnobs]
}
