import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { ThemeType } from "./index";

type gridProps = {
    selectedTheme: ThemeType
}

type gridBodyProps = {
    width: string
}
const halfScreenSize = "50%";

const GridMemoryGameStyled = styled.div`
background:${(props: gridProps) => props.selectedTheme.backgroundColor};
color:${(props: gridProps) => props.selectedTheme.color};
${tw`h-screen  flex flex-col items-center justify-center`}`;

const GridBody = styled.div`
width : ${(props: gridBodyProps) => props.width === halfScreenSize ? halfScreenSize : props.width + 'px'};
${tw`justify-center items-center`}
`;


const Level = styled.p`
${tw`text-4xl font-bold mb-4`}
`;
const Message = styled.p`
${tw`text-3xl font-bold text-green-500`}
`;

const PlayAgainBtn = styled.button`
${tw` p-2 bg-blue-500 rounded text-2xl text-white mt-2`}`;

const GameCompletedComp = styled.div`
${tw`flex flex-col justify-center items-center`}`;


export { GridMemoryGameStyled, Level, Message, PlayAgainBtn, GameCompletedComp, GridBody };
