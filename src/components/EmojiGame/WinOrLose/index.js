import React from "react";
import { ResultDiv, FinalScore, GameResult, PlayAgainBtn } from "./StyledComponent.js";

class WinOrLose extends React.Component {
    render() {
        const { score, onPlayAgainClick, isWon, selectedTheme } = this.props;
        return (
            <ResultDiv selectedTheme={selectedTheme}>
                <FinalScore>{score}</FinalScore>
                <GameResult isWon={isWon}>{isWon ? "You Won!" : "You Lose!"}</GameResult>
                <PlayAgainBtn onClick={onPlayAgainClick}>Play Again</PlayAgainBtn>
            </ResultDiv>
        );
    }
}
export default WinOrLose;
