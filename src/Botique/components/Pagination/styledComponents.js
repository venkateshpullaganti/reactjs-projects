import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = styled.div`
   ${tw`flex p-1 m-2 align-baseline self-end`};
`
const LeftArrow = styled.button`
   ${props =>
      props.disabled
         ? ` opacity:0.5;
            cursor:not-allowed;
           `
         : `
            opacity:1;
            cursor:pointer;
            `};
   ${tw`bg-black text-white pl-1 pr-1 rounded text-3xl`};
   &:focus {
      outline: none;
   }
`
const RightArrow = styled.button`
   ${tw`bg-black text-white pl-1 pr-1 rounded text-3xl z-0`};

   &:focus {
      outline: none;
   }
   ${props =>
      props.disabled
         ? ` opacity:0.5;
            cursor:not-allowed;
           `
         : `
            opacity:1;
            cursor:pointer;
            `};
`
const TotoalPages = styled.div`
   ${tw`p-1 m-1 `};
`
const PresentPage = styled.div`
   ${tw`border border-solid border-black p-1 m-1`};
`
const Slash = styled.span`
   ${tw`text-2xl`};
`
export { Container, LeftArrow, PresentPage, Slash, TotoalPages, RightArrow }
