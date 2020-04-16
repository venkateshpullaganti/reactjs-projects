import styled from "@emotion/styled";
import tw from "tailwind.macro";

type GameFieldStyledProps = {
    width: number;
}

const GameFieldStyled = styled.div`
width:${(props: GameFieldStyledProps) => props.width + 'px'};
${ tw`flex flex-wrap`} `;


export { GameFieldStyled };