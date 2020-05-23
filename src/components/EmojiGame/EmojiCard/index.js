import React from 'react'

import { EmojiInfo, ImgContainer, Emoji, EmojiName } from './StyledComponent'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
@observer
class EmojiCard extends React.Component {
   @observable isClicked = false
   onEmojiClick = e => {
      // const { onEmojiClick } = this.props;
      this.isClicked = !this.isClicked
      this.props.onEmojiClick(e.currentTarget.id)
   }

   render() {
      const { emoji, selectedTheme, id } = this.props
      return (
         <EmojiInfo
            id={id}
            selectedTheme={selectedTheme}
            onClick={this.onEmojiClick}
            isClicked={this.isClicked}
         >
            <ImgContainer>
               <Emoji alt={emoji.name} src={emoji.url} />
            </ImgContainer>
            <EmojiName>{emoji.name}</EmojiName>
         </EmojiInfo>
      )
   }
}
export default EmojiCard
