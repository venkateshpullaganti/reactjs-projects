import React from "react";

import { NavBar } from "../navbar";

class DisableOrEnable extends React.Component {
    state = {
        isDisableButtonChecked: false,
        showMessage: ""
    }
    handleChange = (e) => {
        let msg = "";
        if (e.target.checked)
            msg = "I am disabled";
        this.setState({
            isDisableButtonChecked: e.target.checked,
            showMessage: msg
        });
    }
    handleSubmit = (e) => {
        this.setState({ showMessage: "Hi, I am active" });
        e.preventDefault();
    }
    displayMessage = (e) => {
        return (<p>{this.state.showMessage}</p>);
    }

    render() {
        return (
            <div>
                <NavBar title="Disable Button" />
                <input type="checkbox" onClick={this.handleChange} />
                <button type="submit" disabled={this.state.isDisableButtonChecked ? true : false} onClick={this.handleSubmit}>Click Me</button>
                {this.displayMessage()}
            </div>
        );
    }
}
export { DisableOrEnable };