import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const CheckOutBtn = styled.button`
    ${tw` p-4 text-lg rounded p-2 bg-red-500 w-full mt-0`};
    &:focus {
        outline: none;
    }
`;
