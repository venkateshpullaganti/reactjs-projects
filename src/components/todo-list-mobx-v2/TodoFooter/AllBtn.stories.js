import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { AllBtn } from './index'

export default {
   component: AllBtn,
   title: 'Buttons/All Button'
}
export const defaultView = () => <AllBtn displayText='All' />

export const buttonWithFunctionality = () => (
   <AllBtn
      displayText={text('Display Text', 'ALL')}
      onClick={action('On Click')}
   />
)
buttonWithFunctionality.story = {
   decorators: [withKnobs]
}
