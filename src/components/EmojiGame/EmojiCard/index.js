import React from "react";

import { EmojiInfo, ImgContainer, Emoji, EmojiName } from "./StyledComponent";

class EmojiCard extends React.Component {
    onEmojiClick = (e) => {
        // const { onEmojiClick } = this.props;
        this.props.onEmojiClick(e.currentTarget.id);
    }

    render() {

        const { emoji, onEmojiClick, selectedTheme, id } = this.props;
        return (
            <EmojiInfo id={id} selectedTheme={selectedTheme} onClick={this.onEmojiClick}>
                <ImgContainer>
                    <Emoji alt={emoji.name} src={emoji.url} />
                </ImgContainer>
                <EmojiName>{emoji.name}</EmojiName>
            </EmojiInfo>

        );
    }
}
export default EmojiCard;