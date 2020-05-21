import React from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { ThemeBtn } from './index'

export default {
   component: ThemeBtn,
   title: 'Buttons/GridGame Theme Button'
}
export const defaultView = () => (
   <ThemeBtn border='#2a4365' displayText='Light' />
)

export const buttonWithFunctionality = () => (
   <ThemeBtn
      border={color('Border', '#2a4365')}
      displayText={text('Display Text', 'Light')}
      onClick={action('On Click')}
   />
)

buttonWithFunctionality.story = {
   decorators: [withKnobs]
}
