import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";

const HeaderStyled = styled.div`
${tw`w-full p-2 flex flex-wrap`}`;

const TopScore = styled.p`
${tw`w-full text-lg`}`;

const Level = styled.p`
${tw` text-lg`}`;

const ThemeButton = styled.button`
${tw`border border-solid border-black text-lg p-2`}`;


export { HeaderStyled, TopScore, Level, ThemeButton };