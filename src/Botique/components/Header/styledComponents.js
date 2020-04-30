import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const HeaderContainer = styled.div`
    ${tw`flex p-6`};
`;

export const SignOutBtn = styled.button`
    ${tw`text-black rounded text-sm p-1 border-solid border border-gray-600`};
    &:focus {
        outline: none;
    }
`;
export const SearchBar = styled.input`
    ${tw`p-2 ml-auto mr-auto self-center border border-solid border-gray-500 rounded`};
    &:focus {
        outline: none;
    }
`;
