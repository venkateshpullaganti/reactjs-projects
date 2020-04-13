/**@jsx jsx */

// import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";


// const dynamicStyle = props =>
//     css ` 
//     color:${props.selectedTheme.color};
//     background:${props.selectedTheme.backgroundColor};
//     `;
// const fullHeight = props =>
//     css `
//     height:95%;
// `;
const statColor = props =>
    css` color :${props.isWon ? "green" : "red"}`;

const ResultDiv = styled.div`
    
    ${tw`flex flex-grow h-full flex-col items-center justify-center p-4 border-solid border-4 border-green-600`}
`;

const FinalScore = styled.p`${tw`font-bold text-2xl `}`;

const GameResult = styled.p`
${statColor}
${tw`font-bold text-2xl`} `;

const PlayAgainBtn = styled.button`${tw`text-white-200 text-2xl bg-blue-700 p-4 rounded`};
 &:focus{
    outline:none
} `;




export { ResultDiv, FinalScore, GameResult, PlayAgainBtn };
