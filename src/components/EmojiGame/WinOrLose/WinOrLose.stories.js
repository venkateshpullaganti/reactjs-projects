import React from 'react'
import { boolean, withKnobs, object, color } from '@storybook/addon-knobs'

import WinOrLose from '.'

const darkTheme = {
   id: 1,
   name: 'dark',
   displayName: 'Dark',
   color: 'white',
   backgroundColor: '#1c2833',
   secondaryBgColor: '#2b3945',
   cardColor: '#2b6cb0',
   shadow: ' 0px 5px 10px #3d3c3c',
   hiddenCell: '#319DC1',
   cell: '#2a4365'
}
const lightTheme = {
   id: 0,
   name: 'light',
   displayName: 'Light',
   color: '#2a4365',
   backgroundColor: '#ebf4ff', //this color  is for body background //
   secondaryBgColor: 'white', //is for the contents on the body like buttons,header etc.,
   cardColor: 'white',
   shadow: '0px 15px 15px lightgrey',
   hiddenCell: '#24946A',
   cell: '#4A596E'
}

export default {
   component: WinOrLose,
   title: 'GameStates/EmojiGameStates',
   decorators: [withKnobs]
}
const DarkTheme = boolean('Dark Theme', false)

const selectedTheme = DarkTheme ? darkTheme : lightTheme

export const LostView = () => (
   <WinOrLose isWon={false} score={5} selectedTheme={selectedTheme} />
)
export const WonView = () => (
   <WinOrLose isWon={true} score={12} selectedTheme={selectedTheme} />
)
export const knob = () => (
   <WinOrLose
      isWon={boolean('isWon', true)}
      score={12}
      selectedTheme={{
         backgroundColor: color('background Color', 'green'),
         color: color('color', 'yellow')
      }}
   />
)
