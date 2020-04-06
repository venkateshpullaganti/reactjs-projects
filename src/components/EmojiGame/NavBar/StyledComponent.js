/**jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";



const dynamicStyle = props =>
    css` 
    color:${props.selectedTheme.color};
    background:${props.selectedTheme.secondaryBgColor}
    `;
// const border = css` border:2px solid green`

const NavBarDiv = styled.div`
    ${dynamicStyle}
    ${tw`flex items-center flex-wrap`}
    `
const Title = styled.div`
    ${tw`text-2xl w-3/5 sm:w-2/5 sm:text-3xl  p-2`}
`;

const StyledDiv = styled.div`
    ${tw`w-3/5 flex items-center justify-end p-2`}  `;

const Score = styled.p`
    ${tw` font-bold sm:m-2`}   `;


const TopScore = styled.p`
    ${tw` font-bold sm:m-2`}   `;

const ThemeButton = styled.button`
    ${tw` text-lg m-2 border-solid border border-black p-1`}    `;

const Num = styled.span`
     ${tw` text-xl`}    `;

const ScoreContainer = styled.div`
    ${tw`hidden w-2/5 sm:w-3/5  sm:flex items-center justify-end`}  `;

const ScoreContainerSmallDivice = styled.div`
    ${tw`flex w-screen sm:hidden flex-col items-center justify-center `}    `;

const NavSubDiv = styled.div`
    ${tw`flex  w-screen`} `;



// const Bold = styled.span`
//     ${tw`font-bold`}
// `;

export { NavBarDiv, Title, StyledDiv, Score, TopScore, ThemeButton, Num, ScoreContainer, ScoreContainerSmallDivice, NavSubDiv }