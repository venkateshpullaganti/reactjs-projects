import { observable, computed } from "mobx";

import CellModel from "../Models/GridMemoryGame";
import data from "./GameData.json";

type levelDataType = {
    gridSize: number;
    hiddenCellCount: number;
    gridWidth: number;
};

class GameStore {
    @observable level: number;
    @observable currentLevelGridCells: Array<CellModel>;
    @observable selectedCellsCount: number;
    @observable isGameCompleted: boolean;
    levelsData: Array<levelDataType>;
    topLevel: number;
    initialHiddenCells: number = 3;
    life: string = "💚";
    totalLives: number = 3;
    @observable lives: Array<string> = [];

    constructor() {
        const savedTopLevel = localStorage.getItem("topLevel");
        this.level = 0;
        this.topLevel = savedTopLevel !== null ? Number(savedTopLevel) : 0;
        this.levelsData = data;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.setGridCells();
        this.initialiseLives();
    }
    initialiseLives = () => {
        this.lives = [];
        for (let i = 0; i < this.totalLives; i++) {
            this.lives.push(this.life);
        }
    };

    @computed
    get currentLevelHiddentCells() {
        return this.level + this.initialHiddenCells;
    }

    onCellClick = (isHiddenCell: boolean) => {
        if (isHiddenCell) {
            this.incrementSelectedCellsCount();
        } else {
            this.resetGame();
        }
        if (this.selectedCellsCount === this.currentLevelHiddentCells) {
            if (this.level === this.levelsData.length - 1) {
                this.isGameCompleted = true;
            } else this.goToNextLevelAndUpdateCells();
        }
    };

    setGridCells = () => {
        this.currentLevelGridCells = []; //emptying the array
        for (let i = 0; i < Math.pow(this.currentLevelHiddentCells, 2); i++) {
            const cellObj = {
                id: Math.random().toString(),
                isHidden: false,
            };
            const cell = new CellModel(cellObj);

            if (i < this.level + this.initialHiddenCells) cell.isHidden = true;
            this.currentLevelGridCells.push(cell);
        }

        for (let i = this.currentLevelGridCells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = this.currentLevelGridCells[i];
            this.currentLevelGridCells[i] = this.currentLevelGridCells[j];
            this.currentLevelGridCells[j] = temp;
        }
    };
    resetSelectedCellsCount = () => {
        this.selectedCellsCount = 0;
    };
    incrementSelectedCellsCount = () => {
        this.selectedCellsCount++;
    };

    goToNextLevelAndUpdateCells = () => {
        this.level++;
        if (this.level === this.levelsData.length - 1)
            this.isGameCompleted = true;
        else {
            this.setGridCells();
            this.resetSelectedCellsCount();
        }
    };
    goToInitialLevelAndUpdateCells = () => {
        if (this.lives.length > 0) {
            this.lives.pop();
        } else {
            this.setTopLevel(this.level);
            this.level = 0;
            localStorage.setItem("currentLevel", this.level.toString());
            this.resetSelectedCellsCount();
            this.initialiseLives();
        }
        this.setGridCells();
    };
    setTopLevel = (currentLevel: number) => {
        if (currentLevel > this.topLevel) this.topLevel = currentLevel;
        localStorage.setItem("topLevel", this.topLevel.toString());
    };

    onPlayAgainClick = () => {
        this.setTopLevel(this.level);
        this.resetGame();
    };
    resetGame = () => {
        if (this.lives.length > 0) {
            this.lives.pop();
        } else {
            this.setTopLevel(this.level);
            this.level = 0;
            this.selectedCellsCount = 0;
            this.isGameCompleted = false;
            this.currentLevelGridCells = [];

            this.initialiseLives();
        }
        this.setGridCells();
    };
}

const gameStore = new GameStore();
export default gameStore;
