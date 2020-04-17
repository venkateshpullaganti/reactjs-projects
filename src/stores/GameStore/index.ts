import { observable, computed } from "mobx";

import CellModel from "../Models/GridMemoryGame"
import data from "./GameData.json";

type levelDataType = {
    gridSize: number,
    hiddenCellCount: number,
    gridWidth: number
}

class GameStore {
    @observable level: number;
    @observable currentLevelGridCells: Array<CellModel>;
    @observable selectedCellsCount: number;
    @observable isGameCompleted: boolean;
    levelsData: Array<levelDataType>
    topLevel: number;
    initialHiddenCells: number = 3;

    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.levelsData = data;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.setGridCells();
    }

    @computed
    get currentLevelHiddentCells() {
        return (this.level + this.initialHiddenCells);
    }

    onCellClick = (clickedCellId: string) => {
        const index = this.currentLevelGridCells.findIndex(cell =>
            cell.id === clickedCellId
        );
        if (this.currentLevelGridCells[index].isHidden) {
            this.selectedCellsCount++;
        }
        else {
            this.resetGame();
        }
        if (this.selectedCellsCount === this.currentLevelHiddentCells) {
            if (this.level === this.levelsData.length - 1) {
                this.isGameCompleted = true;
            }
            else
                this.goToNextLevelAndUpdateCells();
        }
    }

    setGridCells = () => {
        this.currentLevelGridCells = [];        //emptying the array
        for (let i = 0; i < Math.pow(this.currentLevelHiddentCells, 2); i++) {
            const cellObj = {
                id: Math.random().toString(),
                isHidden: false
            }
            const cell = new CellModel(cellObj);

            if (i < (this.level + this.initialHiddenCells))
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
        if (this.level === this.levelsData.length - 1)
            this.isGameCompleted = true;
        else {
            this.setGridCells();
            this.resetSelectedCellsCount();
        }
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