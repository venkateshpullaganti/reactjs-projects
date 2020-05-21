import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CompletedBtn } from './index'

export default {
   component: CompletedBtn,
   title: 'Buttons/Completed Button'
}
export const defaultView = () => <CompletedBtn displayText='Completed' />

export const buttonWithFunctionality = () => (
   <CompletedBtn
      displayText={text('Display Text', 'Completed')}
      onClick={action('On Click')}
   />
)
buttonWithFunctionality.story = {
   decorators: [withKnobs]
}
