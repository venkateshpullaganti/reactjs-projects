import React from 'react'

import { RootDiv, AppBody } from './StyledComponent'
import NavBar from './NavBar'
import EmojiCard from './EmojiCard'
import HowToPlay from './HowToPlay'
import WinOrLose from './WinOrLose'

class EmojiGame extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         emojis: null,
         score: 0,
         topScore: 0,
         gameState: 'PLAYING'
      }
   }
   onEmojiClick = clickedEmojiName => {
      const index = this.state.emojis.findIndex(
         currentEmoji => currentEmoji.name === clickedEmojiName
      )

      if (this.state.emojis[index].isClicked) {
         this.setState({ gameState: 'LOSE' })
      } else {
         let prevEmojis = [...this.state.emojis]
         prevEmojis[index].isClicked = true
         this.incrementScoreAndSetGameStatus()
         this.setState({ emojis: [...prevEmojis] })
         this.shuffleEmojis()
      }
   }
   shuffleEmojis = () => {
      let prevEmojis = [...this.state.emojis]

      for (let i = prevEmojis.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * i)
         const temp = prevEmojis[i]
         prevEmojis[i] = prevEmojis[j]
         prevEmojis[j] = temp
      }
      this.setState({ emojis: [...prevEmojis] })
   }
   incrementScoreAndSetGameStatus = () => {
      let prevScore = this.state.score
      prevScore++
      if (prevScore === 12) {
         this.setState({ score: prevScore, gameState: 'WON' })
      } else this.setState({ score: prevScore })
   }
   onPlayAgainClick = () => {
      this.setTopScore()
      this.resetGame()
      this.componentDidMount()
   }

   setTopScore = () => {
      const { score, topScore } = this.state
      if (score > topScore) this.setState({ topScore: score })
   }
   resetGame = () => {
      this.setState({ score: 0, gameState: 'PLAYING', emojis: null })
   }
   evaluateResult = () => {
      const { selectedTheme } = this.props
      const { gameState, score } = this.state
      if (gameState === 'PLAYING') {
         return (
            <AppBody selectedTheme={selectedTheme}>
               {this.renderEmojiCards()}
            </AppBody>
         )
      } else {
         return (
            <WinOrLose
               onPlayAgainClick={this.onPlayAgainClick}
               score={score}
               isWon={gameState === 'WON' ? true : false}
               selectedTheme={selectedTheme}
            />
         )
      }
   }

   renderEmojiCards = () => {
      const { selectedTheme } = this.props
      let emojiCards = null
      if (this.state.emojis !== null) {
         emojiCards = this.state.emojis.map(currentEmoji => (
            <EmojiCard
               onEmojiClick={this.onEmojiClick}
               selectedTheme={selectedTheme}
               key={currentEmoji.id}
               id={currentEmoji.id}
               emoji={currentEmoji}
            ></EmojiCard>
         ))
      }
      return emojiCards
   }
   componentDidMount() {
      const emojiNames = [
         'Exploding Head',
         'Smiling Face with Sweat',
         ' Heart-Eyes',
         'Smirking Face',
         'Thinking Face',
         'Winking Face',
         'Grinning Face',
         'Crying Face',
         'Astonished Face',
         'Face with Tears of Joy',
         'Star-Struck',
         'Winking Face with Tongue'
      ]
      let emojisObj = []
      for (let i = 0; i < emojiNames.length; i++) {
         let obj = {
            id: emojiNames[i],
            name: emojiNames[i],
            url: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${i +
               1}.png`,
            isClicked: false
         }
         emojisObj.push(obj)
      }
      this.setState({ emojis: emojisObj })
   }
   render() {
      const { selectedTheme } = this.props

      return (
         <RootDiv selectedTheme={selectedTheme}>
            <NavBar
               selectedTheme={selectedTheme}
               onChangeSelectedTheme={this.props.onChangeSelectedTheme}
               score={this.state.score}
               topScore={this.state.topScore}
            />
            {this.evaluateResult()}
            <HowToPlay selectedTheme={selectedTheme}></HowToPlay>
         </RootDiv>
      )
   }
}
export default EmojiGame
