import styled from "@emotion/styled";
import tw from "tailwind.macro";


type PropsType = {
    width: number,
    background: string
}


const CellStyled = styled.button`
width: ${ (props: PropsType) => props.width - 8 + 'px'};    //decreasing the cell size for the margin
height:${ (props: PropsType) => props.width - 8 + 'px'};
background:${(props: PropsType) => props.background};
margin:4px;
transition: backgroundColor 2s;
outline:none;
`;


export { CellStyled };