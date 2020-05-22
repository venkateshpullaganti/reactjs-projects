import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const CheckOutBtn = styled.button`
   background: ${props => props.background};
   width: ${props => `${props.width}%`};
   ${props =>
      props.disabled
         ? ` opacity:0.5;
            cursor:not-allowed;
           `
         : `
            opacity:1;
            cursor:pointer;
            `};

   ${tw`text-lg text-gray-200 rounded p-2  self-center`};
   &:focus {
      outline: none;
   }
`
