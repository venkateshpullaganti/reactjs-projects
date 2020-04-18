import styled from "@emotion/styled";
import tw from "tailwind.macro";

const NetworkFailed = styled.div`
    ${tw`h-full flex flex-col justify-center items-center`}
`;
const Msg = styled.p`
    ${tw`text-xl`}
`;
const Retry = styled.button`
    ${tw`text-xl bg-blue-500 p-2 rounded text-white`}
`;

export { NetworkFailed, Msg, Retry };
