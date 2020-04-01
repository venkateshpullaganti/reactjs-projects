import React from "react"

class CheckboxWithLabel extends React.Component {

    handleCheckboxClick = (event) => {

        this.props.handleCheckboxClick(this.props.label, event.target.checked);
    }


    render() {
        return (
            <div>
            <input type="checkbox" id={this.props.label} onClick={this.handleCheckboxClick}/>
            <label htmlFor={this.props.label}>{this.props.label}</label>
            </div>
        );
    }
}
export { CheckboxWithLabel };
