import styled from "@emotion/styled";
import tw from "tailwind.macro";


type PropsType = {
    width: number,
    background: string
}


const CellStyled = styled.button`
width: ${ (props: PropsType) => props.width - 8 + 'px'};    //decreasing the cell size for the margin
height:${ (props: PropsType) => props.width - 8 + 'px'};
background-image:${(props: PropsType) => `linear-gradient(${props.background},${props.background})`};

background-repeat: no-repeat;
margin: 4px;
transition: background-size .5s;
&: focus{
    outline: none;
};
`;


export { CellStyled };

// border:1px solid white;
// background-size: 0% 0%;
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: 100% 100%;


