import React from "react";
import { observer } from "mobx-react";

import CellModel from "../../../stores/Models/GridMemoryGame";
import Cell from "../Cell";
import { GameFieldStyled } from "./StyledComponents";

interface GameFieldProps {
    level: number,
    cells: Array<CellModel>,
    onCellClick: (id: string) => void,
    resetGame: () => void,
    width: number
}


@observer
class GameField extends React.Component<GameFieldProps> {

    timerId;
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    renderCells = () => {
        const { level, cells, onCellClick, width } = this.props;
        return cells.map(eachCell =>
            <Cell
                width={width / (level + 3)}
                key={Math.random()}
                cell={eachCell}
                onCellClick={onCellClick}
                level={level}
            />)
    }

    render() {
        const { resetGame, level, width } = this.props;
        clearInterval(this.timerId);
        this.timerId = setInterval(() => { resetGame(); }, ((level + 3) * 2) * 1000)

        return (
            <GameFieldStyled width={width}>
                {this.renderCells()}
            </GameFieldStyled>
        );
    }
}
export default GameField;