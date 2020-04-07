import { observable } from "mobx";
import { observer } from "mobx-react";


// @observer
class ThemeStore {

    @observable selectedTheme;


    static themeOptions = {
        light: {
            id: 0,
            name: "light",
            displayName: "Light Theme",
            color: "#2a4365",
            backgroundColor: " #ebf4ff",       //this color  is for body background
            secondaryBgColor: "white",        //is for the contents on the body like buttons,header etc.,
            cardColor: "white",
            shadow: "0px 15px 15px lightgrey",

        },
        dark: {
            id: 1,
            name: "dark",
            displayName: "Dark Theme",
            color: "white",
            backgroundColor: "#1c2833",
            secondaryBgColor: "#2b3945",
            cardColor: "#2b6cb0",
            shadow: " 0px 5px 10px #3d3c3c",

        },
        monaki: {
            id: 2,
            name: "monaki",
            displayName: "Monaki Mode",
            color: " #60e28b",
            backgroundColor: "#474747 ",
            secondaryBgColor: " #939794",
            shadow: " 0px 5px 10px #939794",
        },
        green: {
            id: 2,
            name: "green",
            displayName: "green Mode",
            color: "white",
            backgroundColor: "#1b262c",
            secondaryBgColor: " #0f4c75",
            shadow: " 0px 5px 10px #1b262c",
        },
        darkBlue: {
            id: 3,
            name: "darkBlue",
            displayName: "Dark Blue Mode",
            color: "white",
            backgroundColor: "#053f5e ",
            secondaryBgColor: " #115173",
            shadow: " 0px 5px 10px #053f5e",
        },
    }

    constructor() {
        this.selectedTheme = ThemeStore.themeOptions["light"];
    }

    changeTheme = (inputTheme) => {
        this.selectedTheme = ThemeStore.themeOptions[inputTheme];
    }
    getCurrentTheme = () => {
        return this.selectedTheme;
    }



}

const themeStore = new ThemeStore();
export { ThemeStore, themeStore };