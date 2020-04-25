import styled from "@emotion/styled";
import tw from "tailwind.macro";

import {
    SELECTED_BTN_BGCOLOR,
    UNSELECTED_BTN_BGCOLOR,
    SELECTED_BTN_TXTCOLOR,
    UNSELECTED_BTN_TXTCOLOR,
} from "../../../constants/StyledConstants";

export const BtnStyled = styled.button`
    background: ${(props) =>
        props.isSelected ? SELECTED_BTN_BGCOLOR : UNSELECTED_BTN_BGCOLOR};
    color: ${(props) =>
        props.isSelected ? SELECTED_BTN_TXTCOLOR : UNSELECTED_BTN_TXTCOLOR};
    ${tw` h-10 w-10 rounded-full m-1`};
    &:focus {
        outline: none;
    }
`;
