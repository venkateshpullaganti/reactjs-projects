import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { ThemeType } from "./index";

type PropsType = {
    selectedTheme: ThemeType
}


const GridMemoryGameStyled = styled.div`
background:${(props: PropsType) => props.selectedTheme.backgroundColor}

${tw`h-screen flex flex-col items-center justify-center`}`;

const GameGrid = styled.div`
${tw`p-2 flex-wrap p-2`}`


export { GridMemoryGameStyled, GameGrid };