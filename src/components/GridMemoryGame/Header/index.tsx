import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import {
   HeaderStyled,
   TopScore,
   Level,
   ThemeButton,
   DivStyled,
   Lives
} from './StyledComponents'
import gameStore from '../../../stores/GameStore'

export type ThemeType = {
   id: number
   name: string
   displayName: string
   color: string
   backgroundColor: string
   secondaryBgColor: string
   cardColor: string
   shadow: string
}

export const ThemeBtn = props => (
   <ThemeButton border={props.border} onClick={props.onClick}>
      Mode: {props.displayText}
   </ThemeButton>
)

interface HeaderProps {
   onChangeTheme: (inputTheme: string) => void
   TopLevel: number
   selectedTheme: ThemeType
   level: number
   lives: Array<string>
   totalLives: number
}

@observer
class Header extends React.Component<HeaderProps> {
   @observable remainingSeconds
   lostLife = '💔'
   lightTheme: string
   darkTheme: string
   constructor(props) {
      super(props)
      this.lightTheme = 'light'
      this.darkTheme = 'dark'
   }

   goToNextLevel = () => {
      gameStore.goToNextLevelAndUpdateCells()
   }

   onChangeTheme = event => {
      const { onChangeTheme, selectedTheme } = this.props
      const updatedTheme =
         selectedTheme.name === this.lightTheme
            ? this.darkTheme
            : this.lightTheme
      onChangeTheme(updatedTheme)
   }
   render() {
      const { TopLevel, selectedTheme, level, lives, totalLives } = this.props
      const displayLives = [...lives]
      if (lives.length < totalLives) {
         for (let i = 0; i < totalLives - lives.length; i++) {
            displayLives.push(this.lostLife)
         }
      }
      return (
         <HeaderStyled>
            <TopScore onClick={this.goToNextLevel}>
               Top Level: {TopLevel}
            </TopScore>
            <Lives>Lives: {displayLives.join(' ')}</Lives>
            <ThemeBtn
               border={selectedTheme.color}
               onClick={this.onChangeTheme}
               displayText={selectedTheme.displayName}
            />
            <DivStyled>
               <Level>Level: {level}</Level>
            </DivStyled>
         </HeaderStyled>
      )
   }
}
export default Header
