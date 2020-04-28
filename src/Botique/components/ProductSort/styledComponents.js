import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const SortBar = styled.div`
    ${tw`flex justify-between`};
`;
export const DisplayedProductsCount = styled.div`
    ${tw``};
`;
export const Dropdown = styled.select`
    ${tw`bg-grey-700 p-1 border border-slod border-gray-500 rounded`};
    &:focus {
        outline: none;
    }
    &:hover {
        border: 1px solid black;
    }
`;
