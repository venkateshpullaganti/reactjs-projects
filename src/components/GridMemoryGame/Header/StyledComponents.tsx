import styled from "@emotion/styled";
import tw from "tailwind.macro";


// import ThemeType from "./index";
//declare propstypes here for every element

type btnProps = {
    border: string
}

const HeaderStyled = styled.div`
${tw`w-100  flex flex-wrap justify-center items-center `}`;

const TopScore = styled.p`
${tw`w-full text-xl text-center p-2 m-4`}`;

const DivStyled = styled.div`
${tw`w-full p-2 flex justify-between items-center `}`;

const Level = styled.p`
${tw` text-xl my-2`}`;

const ThemeButton = styled.button`
border:${(props: btnProps) => `1px solid ${props.border}`};
${tw`text-xl p-1 my-2`}
:focus{
    outline:none;
}`;


export { HeaderStyled, TopScore, Level, ThemeButton, DivStyled };