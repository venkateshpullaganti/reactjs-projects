
import React from "react";
import { RootDiv, AppBody } from "./StyledComponent";
import NavBar from "./NavBar";
import EmojiCard from "./EmojiCard";
import HowToPlay from "./HowToPlay";
import WinOrLose from "./WinOrLose";




class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: null,
            score: 0,
            topScore: 0,
            gameState: "PLAYING"
        }
    }
    onEmojiClick = (emojiId) => {
        const { emojis, score } = this.state;

        const index = emojis.findIndex(currentEmoji =>
            currentEmoji.id === emojiId
        );


        if (emojis[index].isClicked) {

            this.setState({ gameState: "LOSE" })
        }
        else {
            this.incrementScore();
            // const { score } = this.state;

            let prevEmojis = [...emojis];
            prevEmojis[index].isClicked = true;
            this.setState({ emojis: [...prevEmojis] });

            const clickedEmojis = emojis.filter(emoji => emoji.isClicked);

            if (clickedEmojis.length === emojis.length)
                this.setState({ gameState: "WON" });
            else {
                this.shuffleEmojis();
            }
        }
    }
    shuffleEmojis = () => {
        let prevEmojis = [...this.state.emojis];

        for (let i = prevEmojis.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = prevEmojis[i]
            prevEmojis[i] = prevEmojis[j]
            prevEmojis[j] = temp
        }
        this.setState({ emojis: [...prevEmojis] });
    }
    incrementScore = () => {
        this.setState(prevState => ({ score: prevState.score + 1 }))

        //use function for set state --done
    }
    onPlayAgainClick = () => {
        this.setTopScore();
        this.resetGame();  //change all emojis is clicked. --done

    }

    setTopScore = () => {
        const { score, topScore } = this.state;
        if (score > topScore)
            this.setState({ topScore: score });
    }
    resetGame = () => {
        const { emojis } = this.state;
        // const prevEmojis = Object.assign({}, this.state.emojis);
        // const prevEmojis = [...this.state.emojis];

        emojis.map(emoji =>
            emoji.isClicked = false
        );

        this.setState({ score: 0, gameState: "PLAYING", emojis: emojis });
    }


    renderComponentBasedOnResult = () => {    //change name -- done
        const { selectedTheme } = this.props;
        const { gameState, score } = this.state;
        if (gameState === "PLAYING") {
            return <AppBody selectedTheme={selectedTheme}>{this.renderEmojiCards()}</AppBody>;
        }
        else {
            return <WinOrLose onPlayAgainClick={this.onPlayAgainClick} score={score} isWon={gameState === "WON" ? true : false
            } selectedTheme={selectedTheme} />
        }

    }


    renderEmojiCards = () => {
        const { selectedTheme } = this.props;
        const { emojis } = this.state;
        let emojiCards = null;
        if (emojis !== null) {
            emojiCards = emojis.map((currentEmoji) =>
                <EmojiCard onEmojiClick={this.onEmojiClick} selectedTheme={selectedTheme} key={currentEmoji.id} id={currentEmoji.id} emoji={currentEmoji}></EmojiCard>
            );
        }
        return emojiCards;
    }
    componentDidMount() {
        const emojiNames = ["Exploding Head", "Smiling Face with Sweat", " Heart-Eyes", "Smirking Face", "Thinking Face", "Winking Face", "Grinning Face", "Crying Face", "Astonished Face", "Face with Tears of Joy", "Star-Struck", "Winking Face with Tongue"];
        let emojisObj = [];
        for (let i = 0; i < emojiNames.length; i++) {
            let obj = {
                id: i + 1,
                name: emojiNames[i],
                url: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${i + 1}.png`,
                isClicked: false
            }
            emojisObj.push(obj);
        }
        this.setState({ emojis: emojisObj })
    }
    render() {
        const { selectedTheme, onChangeSelectedTheme, } = this.props;
        const { score, topScore } = this.state; //destructure.. --done

        return (
            <RootDiv selectedTheme={selectedTheme}>
                <NavBar selectedTheme={selectedTheme} onChangeSelectedTheme={onChangeSelectedTheme} score={score} topScore={topScore} />
                {this.renderComponentBasedOnResult()}
                <HowToPlay selectedTheme={selectedTheme}></HowToPlay>
            </RootDiv>
        );
    }
}
export default EmojiGame;