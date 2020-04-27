import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SHOW = "FLEX";
const HIDE = "none";

export const ProductContainer = styled.div`
    ${tw`sm:w-64 md:w-56 m-2 flex flex-col items-center justify-center border-solid border-2 border-black-700 relative`};
`;
export const Image = styled.img`
    ${tw``};
`;
export const ImageContainer = styled.div`
    ${tw`w-4/5 object-contain mb-2`};
`;

export const Title = styled.span`
    ${tw` object-contain text-center `};
`;
export const Price = styled.div`
    ${tw`text-lg`};
`;
export const Component = styled.div`
    ${tw``};
`;
export const FreeShipping = styled.div`
    display: ${(props) => (props.isFreeShipping ? SHOW : HIDE)};
    ${tw`text-xs text-white p-1 bg-black absolute top-0 right-0`};
`;
export const Bar = styled.span`
    ${tw`w-4 m-2 border-solid border-2 border-yellow-500 rounded-full `};
`;

export const AddToCartBtn = styled.button`
    ${tw`bg-black text-white py-2 w-48 rounded mt-auto`};
    &:focus {
        outline: none;
    }
`;
export const CurrencyFormat = styled.div`
    ${tw`text-xs mr-1 `};
`;
export const PriceContainer = styled.div`
    ${tw`flex items-baseline`};
`;

export const Installment = styled.div`
    ${tw`text-xs`};
`;
