import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import { E_COMMERCE_PRODUCTS_PATH } from "../../constants/RouteConstants";

export default class HomePage extends React.Component {
   // gotoLoginPage() {
   //     return <Redirect to={{ pathname: E_COMMERCE_SIGN_IN_PATH }} />;
   // }
   render() {
      return (
         <div className="h-screen bg-gray-800 flex justify-center items-center flex-col text-white">
            <header>
               <img src={logo} className="App-logo" alt="logo" />
               <p>Hello..!</p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Build Your Own Apps:
               </a>
            </header>
            <ul className=" w-1/6 flex flex-col p-2 items-center">
               <li>
                  <Link to="/todo-list-api">Todo List With API</Link>
               </li>
               <li>
                  <Link to="/grid-memory-game">Grid Memory Game</Link>
               </li>
               <li>
                  <Link to="/users">Users Page</Link>
               </li>

               <li>
                  <Link to="/events-app">Events App</Link>
               </li>
               <li>
                  <Link to="/todo-list">TodoList</Link>
               </li>
               <li>
                  <Link to="/covid19-dashboard">Covid19 Dashboard</Link>
               </li>
               <li>
                  <Link to="/form-components">Form Components</Link>
               </li>
               <li>
                  <Link to="/emojis-game">Emojis Game</Link>
               </li>
               <li>
                  <Link to="/counter-page">Counter Page</Link>
               </li>
               <li>
                  <Link to="/todo-list-mobx">TodoList Mobx</Link>
               </li>
               <li>
                  <Link to="/todo-list-mobx-v2">TodoList Mobx V2 (Model)</Link>
               </li>
               <li>
                  <Link to="/page-1">Page 1</Link>
               </li>

               <li>
                  <Link to={E_COMMERCE_PRODUCTS_PATH}>E-Commerce Site</Link>
               </li>
               <li>
                  <Link to={"/practice-advanced-concepts"}>Adv Topics</Link>
               </li>
            </ul>
         </div>
      );
   }
}

export { HomePage };

// function gotoGridScreenIfLoggedIn() {
//     return <Redirect to={{ pathname: "/grid-memory-game" }} />;
// }

// if (getAccessToken() === undefined) {
//     return this.gotoLoginPage();
// } else
