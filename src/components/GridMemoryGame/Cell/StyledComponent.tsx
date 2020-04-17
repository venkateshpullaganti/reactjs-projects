import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { keyframes } from "@emotion/core";

type PropsType = {
    width: number,
    pointerEvents: string,
    background: string
}
type BackgroundProps = {
    height: number,
    background: string,
    toggleShow: string
}

const CellStyled = styled.div`
width: ${ (props: PropsType) => props.width - 8 + 'px'};    //decreasing the cell size for the margin
height:${ (props: PropsType) => props.width - 8 + 'px'};
pointer-events:${ (props: PropsType) => props.pointerEvents};
margin: 4px;
background:${(props: PropsType) => props.background};

animation: 1s ease-in ${keyframes`{
    0% {
        filter: brightness(0.7);
    }
    100%
    {
        filter: brightness(1);
    }`}
`;

const Background = styled.div`
background:${(props: BackgroundProps) => props.background};
height:${(props: BackgroundProps) => props.toggleShow === 'show' ? "100%" : "0px"};
width:${(props: BackgroundProps) => props.toggleShow === 'show' ? "100%" : "0px"};
transition:all ease-in 0.5s;

animation: .5s ease ${keyframes`{
    0% {
       height:0%;
       width:0%;
    }
    100%
    {
       height:100%;
       width:100%;
    }`}
`;


export { CellStyled, Background };

// border:1px solid white;
// background-size: 0% 0%;
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: 100% 100%;
//transition:all .2s;

// background-image:${(props: PropsType) => `linear-gradient(${props.background},${props.background})`};

