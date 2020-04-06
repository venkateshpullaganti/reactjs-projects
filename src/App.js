/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { TodoList } from './components/todo-list';
import { FormComponents } from './components/form-components';
import { HomePage } from "./components/HomePage";
import { Greetings } from "./components/form-components/Greetings";
import { FavouriteDessert } from "./components/form-components/favourite-dessert";
import { VisitedCities } from "./components/form-components/visited-cities";
import { YourState } from "./components/form-components/your-state";
import { DisableOrEnable } from "./components/form-components/disable-enable";
import Covid19Dashboard from "./components/covid19-dashboard";
import CountryDetails from "./components/covid19-dashboard/country-details";
import Page1 from "./components/Page1";
import EmojiGame from "./components/EmojiGame";
import "./App.css"
import "./components/todo-list/todo-list.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: App.themeOptions.light
    }

  }
  static themeOptions = {
    light: {      //remove string type
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





  onChangeSelectedTheme = (inputTheme) => {

    this.setState({ selectedTheme: App.themeOptions[inputTheme] }); //get the theme

  }


  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>~
          <Route exact path="/todo-list">
              <TodoList />
            </Route>
            <Route exact path="/covid19-dashboard">
              <Covid19Dashboard selectedTheme={this.state.selectedTheme} onChangeSelectedTheme={this.onChangeSelectedTheme} />
            </Route>
            <Route exact path="/form-components">
              <FormComponents />
            </Route>

            <Route exact path="/form-components/greetings">
              <Greetings />
            </Route>

            <Route exact path="/form-components/favorite-dessert">
              <FavouriteDessert dessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]} />
            </Route>

            <Route exact path="/form-components/visited-cities">
              <VisitedCities cityList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]} />
            </Route>

            <Route exact path="/form-components/your-state">
              <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]} />
            </Route>

            <Route exact path="/form-components/disable-enable">
              <DisableOrEnable />
            </Route>

            <Route exact path="/covid19-dashboard/details/:countryId">
              <CountryDetails selectedTheme={this.state.selectedTheme} onChangeSelectedTheme={this.onChangeSelectedTheme} />
            </Route>
            <Route exact path="/page-1">
              <Page1 />
            </Route>
            <Route exact path="/emojis-game" children={<EmojiGame selectedTheme={this.state.selectedTheme} onChangeSelectedTheme={this.onChangeSelectedTheme} />} />
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}



// class Random extends 
// {
//   constructor(props)
//   {
//     super(props);
//     console.log("random constructor");

//   }
//   render(){
//     console.log("random");
//     return(
//       <p>hi</p>
//       )
//   }

// }
