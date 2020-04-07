import React from "react";

import { EmojiCardStyled, ImgContainer, Emoji, EmojiName } from "./StyledComponent";

function EmojiCard(props) {

    //styled emoji card...

    const { emoji, selectedTheme, id, onEmojiClick } = props;
    return (
        <EmojiCardStyled isClicked={emoji.isClicked} id={id} selectedTheme={selectedTheme} onClick={() => onEmojiClick(id)}>
            <ImgContainer>
                <Emoji alt={emoji.name} src={emoji.url} />
            </ImgContainer>
            <EmojiName>{emoji.name}</EmojiName>
        </EmojiCardStyled>

    );
}
export default EmojiCard;