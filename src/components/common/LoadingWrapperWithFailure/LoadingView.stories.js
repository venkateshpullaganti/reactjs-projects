import React from 'react'
import { withKnobs, color } from '@storybook/addon-knobs'

import LoadingView from './LoadingView'

import '../../../styles/tailwind.css'

export default {
   component: LoadingView,
   title: 'Common/LoadingView'
}

export const defaultView = () => <LoadingView />

export const knobs = () => <LoadingView fill={color('Color', 'green')} />

knobs.story = {
   decorators: [withKnobs]
}
