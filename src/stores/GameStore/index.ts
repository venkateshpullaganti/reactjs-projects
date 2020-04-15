import { observable } from "mobx";

import CellModel from "../Models/GridMemoryGame"
import { data } from "./GameData";



class GameStore {

    static initialLevelCells: number = 3;

    @observable level: number;
    @observable currentLevelGridCells: Array<CellModel>;
    @observable selectedCellsCount: number;
    @observable isGameCompleted: boolean;
    gameData: Array<Object>
    topLevel: number;
    cells: Array<CellModel>;

    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.gameData = data;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.cells = [];
        this.setGridCells();
    }

    onCellClick = (clickedCellId: string) => {
        const status = this.currentLevelGridCells.findIndex(cell =>
            cell.id === clickedCellId
        );
        if (status === -1) {

            this.resetGame();
        }
        else
            this.selectedCellsCount++;

        if (this.selectedCellsCount === this.level) {
            if (this.level === this.gameData.length) {
                this.isGameCompleted = true;
                console.log("reached top level");
            }
            else
                this.goToNextLevelAndUpdateCells();
        }
    }

    setGridCells = () => {
        this.cells = [];
        for (let i = 0; i < Math.pow(this.level + GameStore.initialLevelCells, 2); i++) {
            const cellObj = {
                id: Math.random().toString(),
                isHidden: false
            }
            const cell = new CellModel(cellObj);
            this.cells.push(cell);
        }

        let shuffledCells = [...this.cells];
        for (let i = shuffledCells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = shuffledCells[i]
            shuffledCells[i] = shuffledCells[j]
            shuffledCells[j] = temp
        }
        this.currentLevelGridCells = shuffledCells.slice(0, this.level + GameStore.initialLevelCells);
        this.currentLevelGridCells.map(eachCell => eachCell.isHidden = true);

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
        this.setTopLevel();
        this.level = 0;
        this.setGridCells();
        this.resetSelectedCellsCount();
    }
    setTopLevel = () => {
        if (this.level > this.topLevel)
            this.topLevel = this.level;
    }

    onPlayAgainClick = () => {
        this.setTopLevel();
        this.resetGame();
    }
    resetGame = () => {
        this.setTopLevel();
        this.level = 0;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
    }
}

const gameStore = new GameStore();
export default gameStore;