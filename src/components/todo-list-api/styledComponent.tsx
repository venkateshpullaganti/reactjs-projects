import styled from "@emotion/styled";
import tw from "tailwind.macro";

const NetworkFailed = styled.div`
    ${tw`h-screen flex flex-col justify-center items-center`}
`;
const Msg = styled.p`
    ${tw`text-xl`}
`;
const Retry = styled.button`
    ${tw`text-xl bg-blue-500 p-2 rounded text-white`}
`;
const NoData = styled.div`
    ${tw`text-xl text-center`}
`;
const LoadingComp = styled.div`
    ${tw`flex flex-col h-screen items-center justify-center`}
`;

export { NetworkFailed, Msg, Retry, NoData, LoadingComp };
