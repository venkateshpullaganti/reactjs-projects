
import React from "react";
import {
    NavBarDiv, Title,
    StyledDiv, Score, TopScore, ThemeButton,
    Num, ScoreContainer, ScoreContainerSmallDivice, NavSubDiv
} from "./StyledComponent";



class NavBar extends React.Component {


    changeTheme = () => {
        const { onChangeSelectedTheme, selectedTheme } = this.props;
        if (selectedTheme.name === "light")
            onChangeSelectedTheme("dark");
        else
            onChangeSelectedTheme("light");
    }


    render() {
        const { score, topScore, selectedTheme, selectedTheme: { displayName } } = this.props;

        return (

            <NavBarDiv selectedTheme={selectedTheme}>
                <NavSubDiv>
                    <Title>Emoji Game</Title>

                    <StyledDiv>

                        <ScoreContainer>
                            <Score> Score: <Num>{score}</Num>  </Score>
                            <TopScore>TopScore: <Num>{topScore}</Num></TopScore>
                        </ScoreContainer>
                        <ThemeButton onClick={this.changeTheme}>{displayName === "Light Theme" ? "Dark Theme" : "Light Theme"}</ThemeButton>

                    </StyledDiv>
                </NavSubDiv>
                <ScoreContainerSmallDivice>

                    <Score> Score: <Num>{score}</Num>  </Score>
                    <TopScore>TopScore: <Num>{topScore}</Num></TopScore>

                </ScoreContainerSmallDivice>
            </NavBarDiv>
        );
    }
}

export default NavBar;