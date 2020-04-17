import React from "react";
import { observer } from "mobx-react";
import uuidv from 'uuid/v4';

import CellModel from "../../../stores/Models/GridMemoryGame";
import Cell from "../Cell";
import { ThemeType } from "../index";
import { GameFieldStyled } from "./StyledComponents";

interface GameFieldProps {
  level: number;
  cells: Array<CellModel>;
  onCellClick: (id: string) => void;
  resetGame: () => void;
  width: number;
  selectedTheme: ThemeType
}

@observer
class GameField extends React.Component<GameFieldProps> {
  timerId;
  initialHiddenCells: number = 3;



  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  renderCells = () => {
    const { level, cells, onCellClick, width, selectedTheme } = this.props;

    return cells.map((eachCell) => (
      <Cell
        width={width / (level + this.initialHiddenCells)}
        key={uuidv()}
        cell={eachCell}
        onCellClick={onCellClick}
        level={level}
        selectedTheme={selectedTheme}
      />
    ));
  };

  render() {

    const { resetGame, level, width } = this.props;
    clearInterval(this.timerId);
    const currentLevelTimeout = (level + this.initialHiddenCells) * 2 * 1000;

    this.timerId = setInterval(() => {
      resetGame();
    }, currentLevelTimeout);

    return (
      <GameFieldStyled width={width}>{this.renderCells()}</GameFieldStyled>
    );
  }
}
export default GameField;
