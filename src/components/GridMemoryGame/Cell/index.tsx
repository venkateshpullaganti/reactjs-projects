import React from "react";

import CellModel from "../../../stores/Models/GridMemoryGame";
import { CellStyled } from "./StyledComponent";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { setTimeout } from "timers";

type CellProps = {
    width: number,
    onCellClick: (id: string) => void,
    cell: CellModel,
    level: number
}

@observer
class Cell extends React.Component<CellProps>{
    @observable shouldShowHiddenCells: boolean;
    @observable isClickedOnCell: boolean;

    constructor(props) {
        super(props);
        this.shouldShowHiddenCells = true;
        this.isClickedOnCell = false;
    }
    componentDidMount() {
        this.timerForInitialDisplay();

    }

    timerForInitialDisplay = () => {
        const { level } = this.props;
        setTimeout(() => {
            this.shouldShowHiddenCells = !this.shouldShowHiddenCells;
        }, ((level + 3) * 1000));
    }
    // changeHiddenCells = () => {

    //     console.log("complete")
    // }


    onCellClick = () => {
        const { onCellClick } = this.props;
        const { id } = this.props.cell;
        this.isClickedOnCell = true;
        this.setCellBgColor();
        onCellClick(id);
    }
    setCellBgColor = () => {
        const { isHidden } = this.props.cell;

        if ((this.shouldShowHiddenCells || this.isClickedOnCell) && isHidden)
            return '#319DC1';
        else if (this.isClickedOnCell && !isHidden) {
            return '#BA214D';
        }
        return "#2a4365";
    }

    render() {
        const { width } = this.props;


        return (

            <CellStyled
                onClick={this.onCellClick}
                background={this.setCellBgColor()}
                width={width}
                disabled={this.shouldShowHiddenCells} />
        );
    }
}
export default Cell;
