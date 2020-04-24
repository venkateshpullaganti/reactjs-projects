import styled from "@emotion/styled";
import tw from "tailwind.macro";

const displayFlex = "flex";
const displayNone = "none";

export const FormContainer = styled.div`
    ${tw`h-screen w-screen flex justify-center items-center bg-pink-200`}
`;
export const FormStyled = styled.form`
    ${tw`flex flex-col p-8 bg-white shadow-lg rounded`}
`;

export const LoginBtn = styled.button`
    ${tw`text-white  bg-black p-2 m-2 rounded`};
    &:focus {
        outline: none;
    }
`;

export const UsernameField = styled.input`
    ${tw`border border-grey-700 border-solid p-2 m-2 rounded`};
    &:focus {
        outline: none;
    }
`;
export const PasswordField = styled.input`
    ${tw`border border-grey-700 p-2 m-2 rounded`};
    &:focus {
        outline: none;
    }
`;
export const Heading = styled.h2`
    ${tw`font-bold m-2`};
`;
export const PasswordAlert = styled.p`
    display: ${(props) => (props.show ? displayFlex : displayNone)};
    ${tw`text-red-500`};
`;

export const NameAlert = styled.p`
    display: ${(props) => (props.show ? displayFlex : displayNone)};
    ${tw`text-red-500`};
`;
