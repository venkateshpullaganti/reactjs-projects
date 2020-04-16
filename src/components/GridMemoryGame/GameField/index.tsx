import React from "react";
import { observer } from "mobx-react";

import CellModel from "../../../stores/Models/GridMemoryGame";
import { data } from "../../../stores/GameStore/GameData";
import Cell from "../Cell";
import { GameFieldStyled, Level, Message, PlayAgainBtn, GameCompletedComp } from "./StyledComponents";

interface GameFieldProps {
    level: number,
    cells: Array<CellModel>,
    onCellClick: (id: string) => void,
    isGameCompleted: boolean,
    onClickPlayAgain: () => void,
    resetGame: () => void
}


@observer
class GameField extends React.Component<GameFieldProps> {

    timerId;

    renderCells = () => {
        const { level, cells, onCellClick } = this.props;


        return cells.map(eachCell => <Cell
            width={data[level].gridWidth / data[level].gridSize}
            key={Math.random()}
            cell={eachCell}
            onCellClick={onCellClick}
            level={level}
        />)
    }

    renderField = () => {
        const { level, isGameCompleted, onClickPlayAgain } = this.props;

        if (isGameCompleted) {
            return (
                <GameCompletedComp>
                    <Level>{level}</Level>
                    <Message>Congratulations..! You have completed all the Levels.</Message>
                    <PlayAgainBtn onClick={onClickPlayAgain}>Play Again</PlayAgainBtn>
                </GameCompletedComp>)
        }
        else
            return (
                <GameFieldStyled width={data[level].gridWidth}>
                    {this.renderCells()}
                </GameFieldStyled>
            )
    }
    render() {
        const { resetGame, level } = this.props;
        clearInterval(this.timerId);
        this.timerId = setInterval(() => { resetGame(); }, ((level + 3) * 2) * 1000)

        return (
            <div>
                {this.renderField()}
            </div>
        );
    }
}
export default GameField;