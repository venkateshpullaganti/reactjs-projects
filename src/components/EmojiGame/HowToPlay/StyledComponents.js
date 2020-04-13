/**@jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";


const dynamicStyle = props =>
  css` 
    color:${props.selectedTheme.color};
    background:${props.selectedTheme.secondaryBgColor}
    `;

const Footer = styled.div`
${dynamicStyle}
${tw`p-4`}
  `;

const Instruction = styled.p`
    
    ${tw`ml-4 text-xl`}
`
const Question = styled.p`
    ${tw`text-xl font-bold`}
`;

export { Footer, Instruction, Question };