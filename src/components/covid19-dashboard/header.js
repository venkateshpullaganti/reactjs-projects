import React from "react";
import { FiMoon } from "react-icons/fi";
import "./header.css";

class Header extends React.Component {

    changeTheme = () => {
        if (this.props.theme === "Light") {
            this.props.onChangeSelectedTheme("Dark");
        }
        else {
            this.props.onChangeSelectedTheme("Light");
        }
    }
    render() {
        return (
            <div className={`header ${this.props.theme}-header`}>
                <p>Where in the world?</p>
                <button className={`btn ${this.props.theme}-btn `} onClick={this.changeTheme} ><FiMoon style={{ fontSize: "25px" }} /> {this.props.theme} Mode</button>
            </div>
        );

    }
}

export default Header;