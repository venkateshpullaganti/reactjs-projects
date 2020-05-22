import React from 'react'
import {
   ResultDiv,
   FinalScore,
   GameResult,
   PlayAgainBtn
} from './StyledComponent.js'

class WinOrLose extends React.Component {
   render() {
      const {
         score,
         onPlayAgainClick,
         isWon,
         selectedTheme,
         style
      } = this.props

      return (
         <ResultDiv selectedTheme={selectedTheme} style={style}>
            <FinalScore>{score}</FinalScore>
            <GameResult isWon={isWon}>
               {isWon ? 'You Won' : 'You Lose'}
            </GameResult>
            <PlayAgainBtn onClick={onPlayAgainClick}>Play Again</PlayAgainBtn>
         </ResultDiv>
      )
   }
}
WinOrLose.defaultProps = {
   score: 0,
   selectedTheme: {
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
}

export default WinOrLose
