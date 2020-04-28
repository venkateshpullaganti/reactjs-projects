import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const CheckOutBtn = styled.button`
    ${(props) =>
        props.disabled
            ? ` opacity:0.5;
            cursor:not-allowed;
           `
            : `
            opacity:1;
            cursor:pointer;
            `};

    ${tw`text-lg text-gray-200 bg-black rounded w-11/12 p-2  self-center`};
    &:focus {
        outline: none;
    }
`;
