import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const HeaderStyled = styled.div`
    ${tw`flex p-6`};
`;

export const SignOutBtn = styled.button`
    ${tw`text-black rounded text-sm p-1 border-solid border border-gray-600`};
    &:focus {
        outline: none;
    }
`;
