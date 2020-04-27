import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const ProductContainer = styled.div`
    border-top: 1px solid yellow;
    ${tw`h-20 flex text-yellow-500 p-4 mt-2`};
`;
const Image = styled.img`
    ${tw`h-16`};
`;
const ImageContainer = styled.div`
    ${tw`object-contain  mr-2`};
`;
const Details = styled.div`
    ${tw``};
`;
const Title = styled.div`
    ${tw`text-sm`};
`;
const PrintStyle = styled.div`
    ${tw`text-sm`};
`;
const Quantity = styled.div`
    ${tw`text-xs`};
`;

const PriceContainer = styled.div`
    ${tw`flex flex-col ml-auto`};
`;

const RemoveBtn = styled.button`
    ${tw`p-2 ml-auto mt-0 text-white `};
    &:focus {
        outline: none;
    }
`;
const Price = styled.div`
    ${tw`flex ml-auto text-sm align-baseline`};
`;
export const CurrencyFormat = styled.div`
    ${tw`text-xs`};
`;

export {
    ImageContainer,
    Image,
    Details,
    Title,
    PrintStyle,
    Quantity,
    PriceContainer,
    RemoveBtn,
    Price,
};
