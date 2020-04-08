/**jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";
import "./tailwind.js";

// const Border = css`
//     border:"1px solid green"
// `;

const dynamicStyle = props =>
    css` 
    color:${props.selectedTheme.color};
    background:${props.selectedTheme.cardColor} `;

const EmojiCardStyled = styled.div`
cursor:pointer;
${ dynamicStyle};
${ '' /* ${bgColor}; */}
${ tw`flex flex-col m-4 items-center h-64 w-64 p-2 border-solid border shadow-custom`} `;

const ImgContainer = styled.div`
${ tw`h-48 w-4/5`}  `;


const Emoji = styled.img`
${ tw`-mt-2 -mb-2 border-solid`}
`;

const EmojiName = styled.p`
${ tw`-mt-4`} `;


export { EmojiCardStyled, ImgContainer, Emoji, EmojiName };