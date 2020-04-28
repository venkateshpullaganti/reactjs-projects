import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SHOW = "25%";
const HIDE = "0";

export const CartContainer = styled.div`
    width: ${(props) => (props.show ? SHOW : HIDE)};
    ${tw` flex flex-col ml-4 h-screen  bg-gray-800 fixed top-0 right-0 `};
    transition: width ease 0.5s;
`;
export const CloseBtn = styled.button`
    display: ${(props) => (props.show ? "flex" : "none")};
    ${tw`w-12 p-2 justify-center items-center bg-gray-800 text-white  -ml-12`};
    &:focus {
        outline: none;
    }
`;

export const CartIcon = styled.div`
    ${tw`text-5xl flex items-center justify-center  text-white`};
`;
export const Itemscount = styled.span`
    ${tw`text-yellow-500 ml-2  relative text-sm`};
`;
export const CartTxt = styled.div`
    ${tw` text-xl font-bold text-white ml-6`};
`;
export const CartHeader = styled.div`
    ${tw`flex flex-col h-1/4 `};
`;
export const Footer = styled.div`
    margin-top: auto;
    ${tw`pb-4 h-1/4 flex flex-col  overflow-hidden`};
`;
export const CartSubHeader = styled.div`
    ${tw`p-2 flex ml-40  mb-2 overflow-hidden`};
`;
