import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CURSER_NOT_ALLOWED = "not-allowed";
const CURSER_POINTER = "pointer";

export const CheckOutBtn = styled.button`
    cursor: ${(props) =>
        props.isCursorAllowed ? CURSER_POINTER : CURSER_NOT_ALLOWED};

    ${tw`text-lg text-gray-200 rounded bg-black w-11/12 p-2  self-center`};
    &:focus {
        outline: none;
    }
`;
