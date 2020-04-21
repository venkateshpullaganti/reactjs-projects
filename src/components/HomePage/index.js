import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

export default function HomePage() {
    return (
        <div className="h-screen bg-gray-800 flex justify-center items-center flex-col text-white">
            <header className="">
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
                    <Link to="/todo-list-mobx-v2">
                        TodoList Mobx V2 (Model)
                    </Link>
                </li>
                <li>
                    <Link to="/page-1">Page 1</Link>
                </li>
            </ul>
        </div>
    );
}

export { HomePage };
