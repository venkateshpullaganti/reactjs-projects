import React from 'react'

import { GameCompletedComponent } from './index'
import { action } from 'mobx'

export default {
   component: GameCompletedComponent,
   title: 'GameStates/GridGame winning'
}

export const WinningState = () => (
   <GameCompletedComponent
      level={7}
      onClickPlayAgain={action('On Clck play again')}
   />
)
