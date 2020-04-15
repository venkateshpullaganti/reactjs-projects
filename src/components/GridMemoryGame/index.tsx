import React from "react";

import gameStore from "../../stores/GameStore";
// import GameStatsBar from "./GameStatsBar";
import { GridMemoryGameStyled } from "./StyledComponents";

class GridMemoryGame extends React.Component {


    render() {
        console.log(gameStore.gameData);
        return (
            <GridMemoryGameStyled>
                {/* <GameStatsBar /> */}

            </GridMemoryGameStyled>
        )
    }
}
export default GridMemoryGame;