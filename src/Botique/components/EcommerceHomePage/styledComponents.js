import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const RootDiv = styled.div`
    ${tw`ml-32`};
`;

export const CartIcon = styled.div`
    ${tw`text-5xl flex items-center justify-center p-4 fixed top-0 right-0 text-white bg-black rounded shadow-lg mr-1 mt-1`};
    cursor: pointer;
`;
export const Itemscount = styled.span`
    ${tw`text-yellow-500 ml-2 p-2 relative text-sm`};
`;
