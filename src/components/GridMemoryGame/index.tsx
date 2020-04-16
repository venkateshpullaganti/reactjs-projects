import React from "react";
import { observable } from "mobx";
import { Provider, observer } from "mobx-react";

import gameStore from "../../stores/GameStore";
import Header from "./Header";
import GameField from "./GameField";
import { GridMemoryGameStyled, GameGrid } from "./StyledComponents";


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

    render() {
        const { selectedTheme } = this.props;

        return (
            <GridMemoryGameStyled selectedTheme={selectedTheme}>
                <GameGrid>

                    {/* <Provider level={gameStore.level} > */}

                    <Header selectedTheme={selectedTheme}
                        TopLevel={gameStore.topLevel}
                        onChangeTheme={this.onChangeTheme}
                        level={gameStore.level}
                    />

                    <GameField
                        isGameCompleted={gameStore.isGameCompleted}
                        level={gameStore.level} cells={gameStore.currentLevelGridCells}
                        onCellClick={gameStore.onCellClick}
                        onClickPlayAgain={this.onClickPlayAgain}
                        resetGame={gameStore.resetGame} />
                    {/* </Provider> */}
                </GameGrid>
            </GridMemoryGameStyled>
        )
    }
}
export default GridMemoryGame;