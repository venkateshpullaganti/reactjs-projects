import React from "react";

import { EmojiCardStyled, ImgContainer, Emoji, EmojiName } from "./StyledComponent";

class EmojiCard extends React.Component {
    // onEmojiClick = (e) => {         //remove this func
    //     // const { onEmojiClick } = this.props;
    //     this.props.onEmojiClick(e.currentTarget.id);
    // }
    //styled emoji card....
    render() {

        const { emoji, selectedTheme, id, onEmojiClick } = this.props;
        return (
            <EmojiCardStyled id={id} selectedTheme={selectedTheme} onClick={() => onEmojiClick(id)}>
                <ImgContainer>
                    <Emoji alt={emoji.name} src={emoji.url} />
                </ImgContainer>
                <EmojiName>{emoji.name}</EmojiName>
            </EmojiCardStyled>

        );
    }
}
export default EmojiCard;