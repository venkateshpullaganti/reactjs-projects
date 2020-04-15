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
    onChangeTheme: Function,
    TopLevel: number,
    level: number,
    selectedTheme: ThemeType
}


// @inject("level")
@observer
class Header extends React.Component<HeaderProps> {

    onChangeTheme = (event) => {
        const { onChangeTheme, selectedTheme } = this.props;
        const updatedTheme = event.target.value === "light" ? "dark" : "light";
        onChangeTheme(updatedTheme);

    }
    render() {
        const { TopLevel, level, selectedTheme } = this.props;
        return (
            <HeaderStyled>
                <TopScore>Top Level: {TopLevel}</TopScore>
                <Level>Level: {level}</Level>
                <ThemeButton onClick={this.onChangeTheme}>Mode:{selectedTheme.name}</ThemeButton>
            </HeaderStyled>);
    }
}
export default Header;