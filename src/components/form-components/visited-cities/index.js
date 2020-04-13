import React from "react";

import { CheckboxWithLabel } from "../../../common/components/checkbox.js"
import { NavBar } from "../navbar";



class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            selectedCities: [],
            visitedCitiesList: [],
            cityOptions: []

        };
    }
    handleCheckboxClick = (city, isVisited) => {
        let prevCities = this.state.selectedCities;
        if (isVisited) {
            prevCities.push(city);
        }

        else {
            // prevCities.splice(prevCities.indexOf(city),1);
            const index = prevCities.indexOf(city);
            prevCities.splice(index, 1);
        }
        this.state.selectedCities = prevCities;

    }
    handleFormSubmit = (e) => {
        e.preventDefault();
    }
    handleSubmit = (e) => {
        this.setState({ visitedCitiesList: this.state.selectedCities });

    }
    renderCityOptions = () => {
        return (this.props.cityList.map((city) =>
            <CheckboxWithLabel key={city} handleCheckboxClick={(presentCity, isVisited) => this.handleCheckboxClick(presentCity, isVisited)} label={city} checked={false} />
        ));
    }
    displayVisitedCitiesMessage = () => {
        if (this.state.visitedCitiesList.length)
            return (<p>Visited cities are {this.state.visitedCitiesList.join(", ")}</p>);
        return null;
    }

    render() {
        return (
            <div>
                <NavBar title="Visited Cities" />
                <form onSubmit={this.handleFormSubmit}>
                    <h4>Which of the following cities you have visited?</h4>
                    {this.renderCityOptions()}
                    <input type="button" value="Make Your Choice" onClick={this.handleSubmit} />
                    {this.displayVisitedCitiesMessage()}
                </form>
            </div>
        );
    }
}

export { VisitedCities };