import React from "react";

import "./index.css"

class NavBar extends React.Component {
    // constructor(props)
    // {
    //     super(props);
    // }
    goBack = () => {
        window.history.back();
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">

                    <button className="back-btn" onClick={this.goBack}>back</button>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
    }
}
export { NavBar };