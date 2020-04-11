import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/todo-list" >TodoList</Link>
        </li>
        <li>
          <Link to="/covid19-dashboard">Covid19 Dashboard</Link>
        </li>
        <li>
          <Link to="/form-components" >Form Components</Link>
        </li>

      </ul>
    </nav>
  );
}
export { Home };