/**@jsx jsx */

// import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";


// export const ThemedDiv = styled.div```


const dynamicStyle = props =>
    css` 
    color:${props.selectedTheme.color};
    background:${props.selectedTheme.backgroundColor}; `;

const RootDiv = styled.div`
${dynamicStyle};
min-height:95vh;
    ${tw`flex m flex-col flex-grow`} `;

const AppBody = styled.div`
    ${tw`flex flex-wrap  items-center justify-center`}`;
export { RootDiv, AppBody };

//border-solid border-4 border-gray-600
