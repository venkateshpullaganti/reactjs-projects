/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "./components/todo-list/todo-list.css";
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
import "./App.css"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: "light"
    }

  }
  static themeOptions = {
    "light": {
      id: 0,
      name: "light",
      displayName: "DayLight Mode",
      color: "black",
      backgroundColor: " #eeefee",       //this color  is for body background
      secondaryBgColor: "white",        //is for the contents on the body like buttons,header etc.,
      shadow: "0px 15px 15px lightgrey",
    },
    "dark": {
      id: 1,
      name: "dark",
      displayName: "Night Mode",
      color: "white",
      backgroundColor: "#1c2833",
      secondaryBgColor: "#2b3945",
      shadow: " 0px 5px 10px #3d3c3c",
    },
    "monaki": {
      id: 2,
      name: "monaki",
      displayName: "Monaki Mode",
      color: " #60e28b",
      backgroundColor: "#474747 ",
      secondaryBgColor: " #939794",
      shadow: " 0px 5px 10px #939794",
    },
    "green": {
      id: 2,
      name: "green",
      displayName: "green Mode",
      color: "white",
      backgroundColor: "#1b262c",
      secondaryBgColor: " #0f4c75",
      shadow: " 0px 5px 10px #1b262c",
    },
    "dark blue": {
      id: 3,
      name: "dark blue",
      displayName: "Dark Blue Mode",
      color: "white",
      backgroundColor: "#053f5e ",
      secondaryBgColor: " #115173",
      shadow: " 0px 5px 10px #053f5e",
    },
  }


  onChangeSelectedTheme = (inputTheme) => {

    this.setState({ selectedTheme: inputTheme });

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
              <Covid19Dashboard selectedTheme={App.themeOptions[this.state.selectedTheme]} onChangeSelectedTheme={this.onChangeSelectedTheme} />
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
              <CountryDetails selectedTheme={App.themeOptions[this.state.selectedTheme]} onChangeSelectedTheme={this.onChangeSelectedTheme} />
            </Route>
            <Route exact path="/page-1">
              <Page1 />
            </Route>
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
