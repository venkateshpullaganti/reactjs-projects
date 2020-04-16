import styled from "@emotion/styled";
import tw from "tailwind.macro";

type GameFieldStyledProps = {
    width: number;
}

const GameFieldStyled = styled.div`
width:${(props: GameFieldStyledProps) => props.width + 'px'};
${ tw`flex flex-wrap`} `;

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

export { GameFieldStyled, Level, Message, PlayAgainBtn, GameCompletedComp };