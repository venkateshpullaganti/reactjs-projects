import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = styled.div`
   ${tw`flex p-1 m-2 align-baseline self-end`};
`
const ArrowBtn = styled.button`
   ${tw`bg-black text-white pl-1 pr-1 rounded text-3xl z-0`};

   &:focus {
      outline: none;
   }
   ${props =>
      props.disabled
         ? ` opacity:0.7;
            cursor:not-allowed;
           `
         : `
            opacity:1;
            cursor:pointer;
            `};
`
const TotoalPages = styled.div`
   ${tw`p-1 mr-1 text-xl `};
`
const PresentPage = styled.div`
   ${tw`border-2 text-lg border-solid border-black p-1 m-1`};
`
const Slash = styled.span`
   ${tw`text-3xl`};
`
export { Container, ArrowBtn, PresentPage, Slash, TotoalPages }
