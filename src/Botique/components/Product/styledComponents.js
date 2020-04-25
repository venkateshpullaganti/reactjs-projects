import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const ProductContainer = styled.div`
    ${tw`sm:w-64 md:w-56 m-2 flex flex-col items-center justify-center   border-solid border-2 border-black-700`};
`;
export const Image = styled.img`
    ${tw` border-solid border-2 border-red-700`};
`;
export const ImageContainer = styled.div`
    ${tw`w-4/5 object-contain mb-2`};
`;

export const Title = styled.span`
    ${tw`w-4/5  text-center `};
`;
export const Price = styled.p`
    ${tw``};
`;
export const Component = styled.div`
    ${tw``};
`;
export const FreeShipping = styled.div`
    ${tw``};
`;
export const Bar = styled.div`
    ${tw`w-4 m-2 border-solid border-2 border-yellow-500 rounded-full `};
`;
