import React from "react"

import { NavBar } from "../navbar"

class FavouriteDessert extends React.Component {
    state = {
        selectedDessert: "",
        favouriteDessert: ""
    }
    handleUserInput = (event) => {
        // this.state.selectedDessert = event.target.value;
        this.setState({ selectedDessert: event.target.value });
    }
    handleSubmit = (e) => {
        this.setState({ favouriteDessert: this.state.selectedDessert });
        e.preventDefault();
    }
    displayMessage = () => {
        if (this.state.favouriteDessert !== "")
            return (<p>Your favourite dessert is {this.state.favouriteDessert.toUpperCase()}</p>)
        return null;
    }

    renderDessertOptions = () => {
        return this.props.dessertList.map((dessert) =>
            <div>
                <input type="radio" id={dessert} onChange={this.handleUserInput} value={dessert} name="desserts" />
                <label for={dessert}>{dessert}</label>
            </div>
        )
    }

    render() {
        return (<div>
            <NavBar title="Favourite Dessert" />
            <form>
                <h3>Which is Your Favourite Dessert?</h3>
                {this.renderDessertOptions()}
                <input type="submit" value="Make Your Choice" onClick={this.handleSubmit} />
                {this.displayMessage()}
            </form>
        </div>
        )
    }
}

export { FavouriteDessert }