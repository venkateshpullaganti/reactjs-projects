/**jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CounterRoot = styled.div`
    ${tw`h-screen flex flex-col justify-center items-center`}`;

const Name = styled.p`
${tw`font-bold text-4xl block`}`;

const BtnContainer = styled.div`
${tw`flex justify-center items-center`}`;

const Number = styled.input`
${tw`h-12 border-2 border-yellow-600 rounded m-3 w-24 p-2 text-center border-solid text-2xl`}
`;

const Btn = styled.button`

${tw`w-16 h-12 bg-blue-800 text-white rounded text-center text-3xl`}
&: focus{
    outline:none
}
`;

export { CounterRoot, Btn, Name, BtnContainer, Number }


// cursor:pointer;