import React from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { PlayAgainButton } from './index'

export default {
   component: PlayAgainButton,
   title: 'Buttons/PlayAgain Button'
}
export const defaultView = () => <PlayAgainButton />

export const buttonWithFunctionality = () => (
   <PlayAgainButton onClick={action('On Click')} />
)

buttonWithFunctionality.story = {
   decorators: [withKnobs]
}
