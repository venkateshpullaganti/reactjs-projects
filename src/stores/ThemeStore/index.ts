import { observable, action } from "mobx";

// @observer
export type ThemeType = {
    id: number,
    name: string,
    displayName: string,
    color: string,
    backgroundColor: string,
    secondaryBgColor: string,
    cardColor: string,
    shadow: string,
    hiddenCell: string,
    cell: string
}

class ThemeStore {

    @observable selectedTheme: ThemeType;
    constructor() {
        const savedTheme = localStorage.getItem("selectedTheme");
        this.selectedTheme = savedTheme !== null ? ThemeStore.themeOptions[savedTheme] : ThemeStore.themeOptions["dark"];
    }



    static themeOptions = {
        light: {
            id: 0,
            name: "light",
            displayName: "Light",
            color: "#2a4365",
            backgroundColor: "#ebf4ff",       //this color  is for body background //
            secondaryBgColor: "white",        //is for the contents on the body like buttons,header etc.,
            cardColor: "white",
            shadow: "0px 15px 15px lightgrey",
            hiddenCell: "#24946A",
            cell: "#4A596E"
        },
        dark: {
            id: 1,
            name: "dark",
            displayName: "Dark",
            color: "white",
            backgroundColor: "#1c2833",
            secondaryBgColor: "#2b3945",
            cardColor: "#2b6cb0",
            shadow: " 0px 5px 10px #3d3c3c",
            hiddenCell: "#319DC1",
            cell: "#2a4365"
        },
        monaki: {
            id: 2,
            name: "monaki",
            displayName: "Monaki Mode",
            color: " #60e28b",
            backgroundColor: "#474747 ",
            secondaryBgColor: " #939794",
            shadow: " 0px 5px 10px #939794",
            hiddenCell: "#24946A",
            cell: "lightgrey"
        },
        green: {
            id: 2,
            name: "green",
            displayName: "green Mode",
            color: "white",
            backgroundColor: "darkgreen",
            secondaryBgColor: " #0f4c75",
            shadow: " 0px 5px 10px #1b262c",
            hiddenCell: "#24946A",
            cell: "lightgrey"
        },
        darkBlue: {
            id: 3,
            name: "darkBlue",
            displayName: "Dark Blue Mode",
            color: "white",
            backgroundColor: "#053f5e ",
            secondaryBgColor: " #115173",
            shadow: " 0px 5px 10px #053f5e",
            hiddenCell: "#24946A",
            cell: "lightgrey"
        },
    }

    @action
    setCurrentTheme = (inputTheme: string) => {
        this.selectedTheme = ThemeStore.themeOptions[inputTheme];
        localStorage.setItem("selectedTheme", this.selectedTheme.name);
    }
    getCurrentTheme = () => {
        return this.selectedTheme;
    }
}

const themeStore = new ThemeStore();


export { ThemeStore, themeStore };
