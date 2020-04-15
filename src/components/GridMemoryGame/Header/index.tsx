import React from "react";
import { observer, inject } from "mobx-react";


import { HeaderStyled, TopScore, Level, ThemeButton } from "./StyledComponents";


type ThemeType = {
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

}
interface InjectedProps extends HeaderProps {
    level: number,
    selectedTheme: ThemeType
}


@inject("level", "selectedTheme")
@observer
class Header extends React.Component<HeaderProps> {


    get injected() {
        return this.props as InjectedProps;
    }

    onChangeTheme = (event) => {
        const { onChangeTheme } = this.props;
        const { selectedTheme } = this.injected;
        const updatedTheme = selectedTheme.name === "light" ? "dark" : "light";
        console.log(updatedTheme);
        onChangeTheme(updatedTheme);

    }
    render() {
        const { TopLevel } = this.props;
        const { selectedTheme, level } = this.injected;
        return (
            <HeaderStyled selectedTheme={selectedTheme}>
                <TopScore>
                    Top Level: {TopLevel}</TopScore>
                <Level>Level: {level}</Level>
                <ThemeButton onClick={this.onChangeTheme}>Mode:{selectedTheme.name}</ThemeButton>
            </HeaderStyled>);
    }
}
export default Header;