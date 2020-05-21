import React from 'react'
import { withKnob, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import '../../styles/tailwind.css'

import { AddTodo } from './index'

export default {
   component: 'AddTodo Button',
   title: 'Buttons/AddTodoButton'
}

export const defaultView = () => <AddTodo />
