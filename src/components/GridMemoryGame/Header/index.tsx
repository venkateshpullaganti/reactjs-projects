import React from "react";
import { observer, inject } from "mobx-react";


import { HeaderStyled, TopScore, Level, ThemeButton, DivStyled } from "./StyledComponents";
import gameStore from "../../../stores/GameStore";


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

interface HeaderProps {
    onChangeTheme: (inputTheme: string) => void,
    TopLevel: number,
    selectedTheme: ThemeType,
    level: number,


}
// interface InjectedProps extends HeaderProps {
//     level: number,

// }


// @inject("level")
@observer
class Header extends React.Component<HeaderProps> {


    // get injected() {
    //     return this.props as InjectedProps;
    // }
    goToNextLevel = () => {
        gameStore.goToNextLevelAndUpdateCells();
    }

    onChangeTheme = (event) => {
        const { onChangeTheme, selectedTheme } = this.props;

        const updatedTheme = selectedTheme.name === "light" ? "dark" : "light";
        console.log(updatedTheme);
        onChangeTheme(updatedTheme);

    }
    render() {
        const { TopLevel, selectedTheme, level } = this.props;
        // const { level } = this.injected;
        return (
            <HeaderStyled >
                <TopScore onClick={this.goToNextLevel}>
                    Top Level: {TopLevel}</TopScore>
                <DivStyled>
                    <Level >Level: {level}</Level>
                    <ThemeButton border={selectedTheme.color} onClick={this.onChangeTheme}>Mode: {selectedTheme.displayName}</ThemeButton>
                </DivStyled>
            </HeaderStyled>);
    }
}
export default Header;