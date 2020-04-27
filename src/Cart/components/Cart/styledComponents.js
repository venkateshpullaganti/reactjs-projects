import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SHOW = "25%";
const HIDE = "0";

export const CartContainer = styled.div`
    width: ${(props) => (props.show ? SHOW : HIDE)};
    ${tw` flex flex-col justify-between ml-4 h-screen  bg-black fixed top-0 right-0`};
    transition: width ease 0.5s;
`;
export const CloseBtn = styled.button`
    display: ${(props) => (props.show ? "flex" : "none")};
    ${tw`w-6 p-2 text-white bg-black -ml-6`};
    &:focus {
        outline: none;
    }
`;

export const CartIcon = styled.div`
    ${tw`text-5xl flex items-center justify-center p-8 text-white ml-2 -mt-8 mb-4`};
`;
export const Itemscount = styled.span`
    ${tw`text-yellow-500 ml-2  relative text-sm`};
`;
export const CartTxt = styled.div`
    ${tw` text-xl font-bold text-white`};
`;
export const CartHeader = styled.div`
    ${tw`flex pl-32 h-20 `};
`;
export const Footer = styled.div`
    ${tw`p-0`};
`;
