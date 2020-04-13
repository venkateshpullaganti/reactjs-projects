import React from "react";

import { Link } from "react-router-dom";
import { NavBar } from "./navbar";

class FormComponents extends React.Component {
    render() {
        return (
            <div>
                <NavBar title="Form Components" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/form-components/greetings">Greetings</Link>
                        </li>
                        <li>
                            <Link to="/form-components/favorite-dessert">Favourite Dessert</Link>
                        </li>
                        <li>
                            <Link to="/form-components/visited-cities">Visited Cities</Link>
                        </li>
                        <li>
                            <Link to="/form-components/your-state">Your State</Link>
                        </li>
                        <li>
                            <Link to="/form-components/disable-enable">Disable Or Enable</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export { FormComponents };