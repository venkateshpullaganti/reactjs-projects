import React from "react";
import { observable } from "mobx";
import { Provider, observer } from "mobx-react";

import gameStore from "../../stores/GameStore";
import { ThemeType } from "../../stores/ThemeStore";
import Header from "./Header";
import GameField from "./GameField";
import { GridMemoryGameStyled } from "./StyledComponents";

interface GridMemoryGameProps {
    selectedTheme: ThemeType,
    onChangeSelectedTheme: (inputTheme: string) => void
}


@observer
class GridMemoryGame extends React.Component<GridMemoryGameProps> {

    // constructor(props) {
    //     super(props);
    // }

    onChangeTheme = (selectedTheme: string) => {
        const { onChangeSelectedTheme } = this.props;
        onChangeSelectedTheme(selectedTheme);
    }

    render() {
        console.log(gameStore.cells);
        const { selectedTheme } = this.props;
        return (
            <GridMemoryGameStyled>
                <Provider level={gameStore.level} selectedTheme={selectedTheme}>

                    <Header TopLevel={gameStore.topLevel} onChangeTheme={this.onChangeTheme} />
                    <GameField />


                </Provider>
            </GridMemoryGameStyled>
        )
    }
}
export default GridMemoryGame;