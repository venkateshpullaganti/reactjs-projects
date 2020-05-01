import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import CellModel from "../../../stores/Models/GridMemoryGame";
import { ThemeType } from "../index";
import { CellStyled, Background } from "./StyledComponent";

type CellProps = {
    width: number;
    onCellClick: (isHidden: boolean) => void;
    cell: CellModel;
    level: number;
    selectedTheme: ThemeType;
};

@observer
class Cell extends React.Component<CellProps> {
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
        const displayTime = (level + 3) * 1000;

        setTimeout(() => {
            this.shouldShowHiddenCells = false;
        }, displayTime);
    };

    onCellClick = () => {
        const { onCellClick } = this.props;
        const { isHidden } = this.props.cell;
        if (!this.isClickedOnCell) {
            this.isClickedOnCell = true;

            setTimeout(() => onCellClick(isHidden), 200);
        }
    };

    getCellBgColor = () => {
        const { isHidden } = this.props.cell;
        const { selectedTheme } = this.props;
        if ((this.shouldShowHiddenCells || this.isClickedOnCell) && isHidden)
            return selectedTheme.hiddenCell;
        else if (this.isClickedOnCell && !isHidden) {
            return "red";
        }
        return selectedTheme.cell;
    };

    render() {
        const { width, selectedTheme } = this.props;
        const allEvents = "all";
        const none = "none";
        const show = "show",
            hide = "hide";

        return (
            <CellStyled
                onClick={this.onCellClick}
                width={width}
                background={selectedTheme.cell}
                pointerEvents={!this.shouldShowHiddenCells ? allEvents : none}
            >
                <Background
                    height={width}
                    toggleShow={
                        this.shouldShowHiddenCells || this.isClickedOnCell
                            ? show
                            : hide
                    }
                    background={this.getCellBgColor()}
                ></Background>
            </CellStyled>
        );
    }
}
export default Cell;
