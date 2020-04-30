import React, { Component } from "react";

class HelloMessage extends Component {
    render() {
        return <span>{`Hello ${this.props.message}`}</span>;
    }
}

export { HelloMessage };
