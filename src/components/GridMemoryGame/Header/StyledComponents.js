import styled from "@emotion/styled";
import tw from "tailwind.macro";
// import { css } from "@emotion/core";

// import ThemeType from "./index";
//declare propstypes here for every element


const HeaderStyled = styled.div`

${tw`w-full p-2 flex flex-wrap justify-center items-center `}`;

const TopScore = styled.p`
${tw`w-full text-lg text-center p-2`}`;

const DivStyled = styled.div`
${tw`w-full p-2 flex justify-between items-center `}`;

const Level = styled.p`

${tw` text-lg`}`;

const ThemeButton = styled.button`
${tw`border border-solid border-black text-lg p-2`}`;


export { HeaderStyled, TopScore, Level, ThemeButton, DivStyled };