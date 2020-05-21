import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { ActiveBtn } from './index'

export default {
   component: ActiveBtn,
   title: 'Buttons/Active Button'
}
export const defaultView = () => <ActiveBtn displayText='Active' />

export const buttonWithFunctionality = () => (
   <ActiveBtn
      displayText={text('Display Text', 'Active')}
      onClick={action('On Click')}
   />
)
buttonWithFunctionality.story = {
   decorators: [withKnobs]
}
