import styled from "@emotion/styled";
import tw from "tailwind.macro";


type GameFieldStyledProps = {
    width: number,

}

const GameFieldStyled = styled.div`
width:${(props: GameFieldStyledProps) => props.width + 'px'};
${ tw`flex flex-wrap`} ;

}`;
export { GameFieldStyled };

// animation: 1s ease ${keyframes`{
//     0% {
//         filter: brightness(0.5)
//     }
//     100%
//     {
//         filter: brightness(1)
//     }`}