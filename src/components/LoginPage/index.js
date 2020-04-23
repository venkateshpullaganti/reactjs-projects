import React, { Component } from "react";
import { setAccessToken, clearUserSession } from "../../utils/StorageUtils";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
    createToken = (event) => {
        setAccessToken("This is sample dummy access token.!");
        event.preventDefault();
        const { history } = this.props;
        history.replace("/");
    };
    clearSession = () => {
        clearUserSession();
        console.log("session cleared");
    };

    render() {
        return (
            <form
                className="flex flex-col p-4 w-1/2"
                onSubmit={this.createToken}
            >
                <input
                    className="bg-teal-200 p-2 m-2"
                    type="text"
                    placeholder="enter username"
                />
                <input
                    className="bg-teal-200 p-2 m-2"
                    type="password"
                    placeholder="enter password"
                />
                <button type="submit">Login</button>
                <button type="button" onClick={this.clearSession}>
                    Clear Session
                </button>
            </form>
        );
    }
}

export default withRouter(LoginPage);
