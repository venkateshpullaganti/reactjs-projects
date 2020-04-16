import React from "react";
// import { observable } from "mobx";
import { observer } from "mobx-react";

import gameStore from "../../stores/GameStore";
import Header from "./Header";
import GameField from "./GameField";
import { GridMemoryGameStyled, Level, Message, PlayAgainBtn, GameCompletedComp, GridBody } from "./StyledComponents";


export type ThemeType = {
    id: number,
    name: string,
    displayName: string,
    color: string,
    backgroundColor: string,
    secondaryBgColor: string,
    cardColor: string,
    shadow: string,
}

interface GridMemoryGameProps {
    selectedTheme: ThemeType,
    onChangeSelectedTheme: (inputTheme: string) => void
}


@observer
class GridMemoryGame extends React.Component<GridMemoryGameProps> {

    // constructor(props) {
    //     super(props);
    // }

    onClickPlayAgain = (): void => {
        gameStore.onPlayAgainClick();
    }

    onChangeTheme = (selectedTheme: string) => {
        const { onChangeSelectedTheme } = this.props;
        onChangeSelectedTheme(selectedTheme);
    }
    renderBasedOnGameStatus = () => {
        const level = gameStore.level;
        const currentLevelGridCells = gameStore.currentLevelGridCells;
        const resetGame = gameStore.resetGame;
        const width = gameStore.levelsData[level].gridWidth;

        if (gameStore.isGameCompleted) {
            return (<GameCompletedComp>
                <Level>{level}</Level>
                <Message>Congratulations..! You have completed all the Levels.</Message>
                <PlayAgainBtn onClick={this.onClickPlayAgain}>Play Again</PlayAgainBtn>
            </GameCompletedComp>)
        }
        else {
            return (<GameField
                level={level} cells={currentLevelGridCells}
                onCellClick={gameStore.onCellClick}
                resetGame={resetGame}
                width={width} />
            )
        }
    }

    render() {
        const { selectedTheme } = this.props;
        const isGameCompleted = gameStore.isGameCompleted;
        const level = gameStore.level;
        const width = gameStore.levelsData[level].gridWidth;

        return (
            <GridMemoryGameStyled selectedTheme={selectedTheme}>
                <GridBody width={isGameCompleted ? 50 : width}>
                    {/* <Provider level={gameStore.level} > */}

                    <Header selectedTheme={selectedTheme}
                        TopLevel={gameStore.topLevel}
                        onChangeTheme={this.onChangeTheme}
                        level={gameStore.level}
                    />
                    {this.renderBasedOnGameStatus()}

                    {/* </Provider> */}
                </GridBody>
            </GridMemoryGameStyled>
        )
    }
}
export default GridMemoryGame;

// selectedTheme={selectedTheme}
