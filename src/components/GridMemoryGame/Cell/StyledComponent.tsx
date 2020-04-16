import styled from "@emotion/styled";
import tw from "tailwind.macro";


type PropsType = {
    width: number,
    background: string
}


const CellStyled = styled.div`
width: ${ (props: PropsType) => props.width - 4 + 'px'};
height:${ (props: PropsType) => props.width - 4 + 'px'};
background:${(props: PropsType) => props.background};
margin:2px;
transition: backgroundColor 2s;
`;


export { CellStyled };