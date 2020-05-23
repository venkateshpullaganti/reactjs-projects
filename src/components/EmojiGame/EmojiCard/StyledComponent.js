/**jsx jsx */
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import './tailwind.js'

// const Border = css`
//     border:"1px solid green"
// `;

const dynamicStyle = props =>
   css`
      color: ${props.selectedTheme.color};
      background: ${props.selectedTheme.cardColor};
   `

const EmojiInfo = styled.div`
    ${dynamicStyle};
    ${'' /* box-shadow:"0 3px 6px #999"; */}
    ${tw`flex flex-col m-4 items-center h-64 w-64 p-2 border-solid border `} 
background: ${props => (props.isClicked ? 'green' : 'initial')}
     `

const ImgContainer = styled.div`
   ${tw`h-48 my-auto  w-4/5`}
`

const Emoji = styled.img`
   ${tw` border-solid`}
`

const EmojiName = styled.p`
   ${tw``}
`

export { EmojiInfo, ImgContainer, Emoji, EmojiName }
