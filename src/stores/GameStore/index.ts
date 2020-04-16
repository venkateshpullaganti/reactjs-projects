import { observable } from "mobx";

import CellModel from "../Models/GridMemoryGame"
import { data } from "./GameData";



class GameStore {

    static initialLevelCells: number = 3;

    clickedCellsIds: Array<string>
    @observable level: number;
    @observable currentLevelGridCells: Array<CellModel>;
    @observable selectedCellsCount: number;
    @observable isGameCompleted: boolean;
    gameData: Array<Object>
    topLevel: number;


    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.gameData = data;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.setGridCells();
        this.clickedCellsIds = [];
    }

    onCellClick = (clickedCellId: string) => {
        const index = this.currentLevelGridCells.findIndex(cell =>
            cell.id === clickedCellId
        );


        if (this.currentLevelGridCells[index].isHidden) {
            if (this.clickedCellsIds.findIndex(eachId => eachId === clickedCellId) === -1) {
                this.selectedCellsCount++;
                this.clickedCellsIds.push(clickedCellId);
            }
        }
        else {
            setTimeout(() => { this.resetGame(); }, 50); // to display red color for 100ms
        }



        if (this.selectedCellsCount === (this.level + 3)) {
            if (this.level === this.gameData.length - 1) {
                this.isGameCompleted = true;
            }
            else
                this.goToNextLevelAndUpdateCells();
        }
    }

    setGridCells = () => {
        this.currentLevelGridCells = []; //emptying the array

        for (let i = 0; i < Math.pow(this.level + GameStore.initialLevelCells, 2); i++) {
            const cellObj = {
                id: Math.random().toString(),
                isHidden: false
            }
            const cell = new CellModel(cellObj);

            if (i < (this.level + 3))
                cell.isHidden = true;

            this.currentLevelGridCells.push(cell);
        }

        for (let i = this.currentLevelGridCells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = this.currentLevelGridCells[i]
            this.currentLevelGridCells[i] = this.currentLevelGridCells[j]
            this.currentLevelGridCells[j] = temp;
        }


    }
    resetSelectedCellsCount = () => {
        this.selectedCellsCount = 0;
    }
    incrementSelectedCellsCount = () => {
        this.selectedCellsCount++;
    }

    goToNextLevelAndUpdateCells = () => {
        this.level++;
        this.setGridCells();
        this.resetSelectedCellsCount();

    }
    goToInitialLevelAndUpdateCells = () => {
        this.setTopLevel(this.level);
        this.level = 0;
        this.setGridCells();
        this.resetSelectedCellsCount();
    }
    setTopLevel = (currentLevel: number) => {
        if (currentLevel > this.topLevel)
            this.topLevel = currentLevel;
    }

    onPlayAgainClick = () => {
        this.setTopLevel(this.level);
        this.resetGame();
    }
    resetGame = () => {
        this.setTopLevel(this.level)
        this.level = 0;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.setGridCells();
    }
}

const gameStore = new GameStore();
export default gameStore;