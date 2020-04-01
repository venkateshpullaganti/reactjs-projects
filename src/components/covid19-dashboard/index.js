import React from "react";
import { Header } from "./header.js";
import { FilterBar } from "./filter-bar.js";
import  Countries  from "./countries.js";
import {withRouter} from "react-router-dom";
// import {FiLoader} from "react-icons/fi";
import "./index.css";

class Covid19Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selectedRegion: "All",
            searchText: ""
        };
        
    }

    componentDidMount() {
        this.getCountries();
    }

    getCountries = () => {
       
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => this.setState({ countries: data }));
    }
    
    
    filterCountriesBySelectedRegion = () => {
        let CountriesBySelectedRegion = this.state.countries;
        if (this.state.selectedRegion !== "All") {
            CountriesBySelectedRegion = this.state.countries.filter((country) =>
                country.region === this.state.selectedRegion
            );
        }
        return CountriesBySelectedRegion;
    }
    
    filterCountriesBySearchText = () => {
        let countriesBySearchText = [];
        if (this.state.searchText !== "") {
            countriesBySearchText = this.state.countries.filter((country) =>
                country.name.toLowerCase().includes(this.state.searchText)
            );
        }
        else
            countriesBySearchText = this.state.countries;

        return countriesBySearchText;
    }

    getRegionNames = () => {
        
        let regionNames = [];
        this.state.countries.forEach((country) => {
            if (!regionNames.includes(country.region) && country.region !== "") {
                regionNames.push(country.region);
            }

        });
        return (regionNames.sort());
    }
    
    onChangeSelectedRegion = (region) => {
        
        this.setState({ selectedRegion: region });
    };
    
    onChangeSearchText = (input) => {
       
        if (input !== "")
            this.setState({ searchText: input.toLowerCase() });
        else
            this.setState({ searchText: input });
    }
    
    filterCountriesBySearchTextAndSelectedRegion = (CountriesBySelectedRegion, countriesBySearchText) => {
       
        return countriesBySearchText.filter(country => CountriesBySelectedRegion.includes(country));
    }

    displayCountries = () => {
        
        let CountriesBySelectedRegion = this.filterCountriesBySelectedRegion();
        let countriesBySearchText = this.filterCountriesBySearchText();
        const showCountries = this.filterCountriesBySearchTextAndSelectedRegion(CountriesBySelectedRegion, countriesBySearchText);
        return showCountries;  
    }

    render() {
        const disCountries = this.displayCountries();
       if(this.state.countries.length){
        return (
        <div className={`covid19-dashboard ${this.props.theme}`}>
            <Header theme={this.props.theme} onChangeSelectedTheme={this.props.onChangeSelectedTheme}/>
            <FilterBar onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion} regions={this.getRegionNames()} theme={this.props.theme} />
            <Countries history={this.props} countries={this.displayCountries()} searchText={this.state.searchText} theme={this.props.theme} selectedRegion={this.state.selectedRegion} />
        </div>
        
        );
       }
       else if(disCountries === 0 && this.state.searchText !== "")
       {
           return(<div>
           <p className="bold">Can't Find {this.state.searchText} in {this.state.selectedRegion} Region</p>
           </div>);
       }
       else
       {
           return(<div className="loader-container">
           <img alt="loading img" src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"/>
           </div>);
        }
    
    }
}
export default withRouter(Covid19Dashboard);






//<img src="https://tenor.com/view/loading-fast-gif-14829442"/>

//<img src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"/>

//alternates :


// import axios from "axios";
// getCountries = async () => {
    //     let response = await axios.get("https://restcountries.eu/rest/v2/all");
    //     let { data } = response;
    //     this.setState({ countries: data });
    // }