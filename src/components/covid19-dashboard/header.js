/** @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";
import { FiMoon } from "react-icons/fi";

import { ThemeStore } from "../../stores/ThemeStore";

class Header extends React.Component {
    changeTheme = (e) => {
        this.props.onChangeSelectedTheme(e.target.value);
    };

    render() {
        return (
            <div
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 90,
                    padding: "20px",
                    fontSize: "20px",

                    backgroundColor: this.props.selectedTheme.secondaryBgColor,
                    color: this.props.selectedTheme.color,
                    boxShadow: this.props.selectedTheme.shadow,
                }}
            >
                <p>Where in the world?</p>
                <form css={{ display: "flex", alignItems: "center" }}>
                    <FiMoon />
                    <select
                        css={{
                            backgroundColor: this.props.selectedTheme
                                .backgroundColor,
                            color: this.props.selectedTheme.color,
                            borderRadius: "5px",
                            height: 50,
                            widht: 100,
                            fontSize: 15,

                            border: `2px solid ${this.props.selectedTheme.secondaryBgColor}`,
                        }}
                        onChange={this.changeTheme}
                        defaultValue={this.props.selectedTheme.name}
                    >
                        {Object.keys(ThemeStore.themeOptions).map((theme) => (
                            <option key={theme} value={theme}>
                                {ThemeStore.themeOptions[theme].displayName}
                            </option>
                        ))}
                    </select>
                    {/* <button className={`btn ${this.props.theme}-btn `} onClick={this.changeTheme} ><FiMoon style={{ fontSize: "25px" }} /> {this.props.theme} Mode</button> */}
                </form>
            </div>
        );
    }
}

export default Header;
