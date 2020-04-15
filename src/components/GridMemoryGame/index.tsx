import React from "react";
import { toJS, observable } from "mobx";
import { Provider, observer } from "mobx-react";

import gameStore from "../../stores/GameStore";
import { themeStore, ThemeType } from "../../stores/ThemeStore";
import Header from "./Header";
import GameField from "./GameField";
import { GridMemoryGameStyled } from "./StyledComponents";


@observer
class GridMemoryGame extends React.Component {
    @observable selectedTheme: ThemeType;

    constructor(props) {
        super(props);
        this.selectedTheme = themeStore.getCurrentTheme();
    }
    getSelectedTheme = () => {
        this.selectedTheme = themeStore.getCurrentTheme();
    }
    onChangeTheme = (selectedTheme: string) => {
        themeStore.setCurrentTheme(selectedTheme);
    }

    render() {
        console.log(toJS(gameStore.cells));
        return (
            <GridMemoryGameStyled>
                <Provider level={gameStore.level} selectedTheme={this.selectedTheme}>

                    <Header level={gameStore.level} selectedTheme={this.selectedTheme} TopLevel={gameStore.topLevel} onChangeTheme={this.onChangeTheme} />
                    <GameField />

                </Provider>
            </GridMemoryGameStyled>
        )
    }
}
export default GridMemoryGame;