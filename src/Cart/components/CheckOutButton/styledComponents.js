import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const CheckOutBtn = styled.button`
    ${tw`text-lg text-gray-200 rounded bg-black w-11/12 p-4 self-center`};
    &:focus {
        outline: none;
    }
`;
