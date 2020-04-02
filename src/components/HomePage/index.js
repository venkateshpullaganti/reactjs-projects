import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function HomePage() {
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center flex-col text-white">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <ul className=" w-1/6 flex flex-col p-2 items-center">
        <li><Link to="/page-1">Page 1</Link></li>
        <li><Link to="/todo-list" >TodoList</Link></li>
        <li><Link to="/covid19-dashboard">Covid19 Dashboard</Link></li>
        <li><Link to="/form-components" >Form Components</Link></li>
      </ul>
    </div >
  );
}

export { HomePage };
