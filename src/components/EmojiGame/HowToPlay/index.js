import React from "react";
import { Footer, Instruction, Question } from "./StyledComponents.js";

class HowToPlay extends React.Component {
    render() {
        const { selectedTheme } = this.props;
        return (
            <Footer selectedTheme={selectedTheme}>
                <Question>How to Play?</Question>
                <Instruction>Get points by clicking on an image but don't click on any image more than once!</Instruction>
            </Footer>
        );
    }
}
export default HowToPlay;