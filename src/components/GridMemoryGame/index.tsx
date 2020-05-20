import React from 'react'
import { observer } from 'mobx-react'
import uuidv from 'uuid/v4'

import gameStore from '../../stores/GameStore'
import Header from './Header'
import GameField from './GameField'
import {
   GridMemoryGameStyled,
   Level,
   Message,
   PlayAgainBtn,
   GameCompletedComp,
   GridBody
} from './StyledComponents'

export type ThemeType = {
   id: number
   name: string
   displayName: string
   color: string
   backgroundColor: string
   secondaryBgColor: string
   cardColor: string
   shadow: string
   hiddenCell: string
   cell: string
}

interface GridMemoryGameProps {
   selectedTheme: ThemeType
   onChangeSelectedTheme: (inputTheme: string) => void
}

@observer
class GridMemoryGame extends React.Component<GridMemoryGameProps> {
   onClickPlayAgain = (): void => {
      gameStore.onPlayAgainClick()
   }

   onChangeTheme = (selectedTheme: string) => {
      const { onChangeSelectedTheme } = this.props
      onChangeSelectedTheme(selectedTheme)
   }
   renderBasedOnGameStatus = () => {
      const { currentLevelGridCells, resetGame, level } = gameStore
      const width = gameStore.levelsData[level].gridWidth
      const { selectedTheme } = this.props

      if (gameStore.isGameCompleted) {
         return (
            <GameCompletedComp>
               <Level>{level}</Level>
               <Message>
                  Congratulations..! You have completed all the Levels.
               </Message>
               <PlayAgainBtn onClick={this.onClickPlayAgain}>
                  Play Again
               </PlayAgainBtn>
            </GameCompletedComp>
         )
      } else {
         return (
            <GameField
               key={uuidv()}
               level={level}
               cells={currentLevelGridCells}
               onCellClick={gameStore.onCellClick}
               resetGame={resetGame}
               width={width}
               selectedTheme={selectedTheme}
            />
         )
      }
   }

   render() {
      const { selectedTheme } = this.props
      const { isGameCompleted, level, topLevel, lives, totalLives } = gameStore
      const width = gameStore.levelsData[level].gridWidth.toString()
      const halfScreenSize = '50%'

      return (
         <GridMemoryGameStyled selectedTheme={selectedTheme}>
            <GridBody width={isGameCompleted ? halfScreenSize : width}>
               <Header
                  selectedTheme={selectedTheme}
                  TopLevel={topLevel}
                  onChangeTheme={this.onChangeTheme}
                  level={level}
                  lives={lives}
                  totalLives={totalLives}
               />
               {this.renderBasedOnGameStatus()}
            </GridBody>
         </GridMemoryGameStyled>
      )
   }
}
export default GridMemoryGame
