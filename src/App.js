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
import ShowCountryDetails from "./components/covid19-dashboard/country-details";
import Page1 from "./components/Page1";
import "./App.css"


export default class App extends React.Component {
  state = {
    selectedTheme: "Light"
  }
  onChangeSelectedTheme = () => {
    if (this.state.selectedTheme === "Light")
      this.setState({ selectedTheme: "Dark" });
    else
      this.setState({ selectedTheme: "Light" });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/todo-list">
              <TodoList />
            </Route>
            <Route exact path="/covid19-dashboard">
              <Covid19Dashboard theme={this.state.selectedTheme} onChangeSelectedTheme={this.onChangeSelectedTheme} />
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
              <ShowCountryDetails theme={this.state.selectedTheme} onChangeSelectedTheme={this.onChangeSelectedTheme} />
            </Route>
            <Route exact path="/page-1">
              <Page1 />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router >
    );
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
