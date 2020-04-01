import React from "react";
import "./countrycard.css";
import {withRouter} from "react-router-dom";



class CountryCard extends React.Component {
    
    navigateToSpecifiedCountry=()=> {
        
        const {history} = this.props;
        
        history.push(
            {
                pathname : `/covid19-dashboard/details/${this.props.country.alpha3Code}`
            });
    }
    
    
    render() {
        return (

            <li onClick={this.navigateToSpecifiedCountry} className={`country-card hvr-grow ${this.props.theme}-card`} key={this.props.country.name}>
                <div className="flag-container">
                    <img className="flag" alt="this.props.country.name" src={this.props.country.flag} />
                </div>
                <div className="country-info">
                    <p className="bold">{this.props.country.name}</p>
                    <p><span className="bold">Population:</span> {this.props.country.population}</p>
                    <p><span className="bold">Region:</span> {this.props.country.region}</p>
                    <p><span className="bold">Capital:</span> {this.props.country.capital}</p>
                </div>
            </li >
        );

    }
}



export default withRouter(CountryCard );