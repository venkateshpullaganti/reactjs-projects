/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import Header from "./header.js";
import FilterBar from "./filter-bar.js";
import Countries from "./countries.js";
import "./index.css";
import { RootContainer, DashboardBody } from "./styledComponents";

import { ThemeContext } from "../../Context/ThemeContex";
import withCountries from "../../components/common/hocs/withCountries";

class Covid19Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedRegion: "All",
         searchText: null,
      };
   }

   filterCountriesBySelectedRegion = () => {
      let CountriesBySelectedRegion = this.props.countries;
      if (this.state.selectedRegion !== "All") {
         CountriesBySelectedRegion = this.props.countries.filter(
            (country) => country.region === this.state.selectedRegion
         );
      }
      return CountriesBySelectedRegion;
   };

   filterCountriesBySearchText = () => {
      let countriesBySearchText = null;
      if (this.state.searchText !== null) {
         countriesBySearchText = this.props.countries.filter((country) =>
            country.name.toLowerCase().includes(this.state.searchText)
         );
      } else countriesBySearchText = this.props.countries;

      return countriesBySearchText;
   };

   getRegionNames = () => {
      let regionNames = [];
      this.props.countries.forEach((country) => {
         if (!regionNames.includes(country.region) && country.region !== "") {
            regionNames.push(country.region);
         }
      });
      regionNames.sort();
      regionNames.unshift("All");

      return regionNames;
   };

   onChangeSelectedRegion = (region) => {
      this.setState({ selectedRegion: region });
   };

   onChangeSearchText = (input) => {
      if (input !== "") this.setState({ searchText: input.toLowerCase() });
      else this.setState({ searchText: input });
   };

   filterCountriesBySearchTextAndSelectedRegion = (
      CountriesBySelectedRegion,
      countriesBySearchText
   ) => {
      return countriesBySearchText.filter((country) =>
         CountriesBySelectedRegion.includes(country)
      );
   };

   displayCountries = () => {
      let countriesBySelectedRegion = this.filterCountriesBySelectedRegion();
      let countriesBySearchText = this.filterCountriesBySearchText();
      const showCountries = this.filterCountriesBySearchTextAndSelectedRegion(
         countriesBySelectedRegion,
         countriesBySearchText
      );
      return showCountries;
   };

   render() {
      const { countries, isLoading, errorMessage } = this.props;

      let displayCountries = null;
      if (countries !== null) {
         displayCountries = this.displayCountries();
      }

      if (errorMessage !== null) {
         return <div>Error: {errorMessage}</div>;
      } else if (isLoading) {
         return (
            <div className="loader-container">
               <img
                  alt="loading img"
                  src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"
               />
            </div>
         );
      } else if (this.props.countries !== null) {
         return (
            <ThemeContext.Consumer>
               {({ selectedTheme, onChangeSelectedTheme }) => (
                  <RootContainer>
                     <Header
                        selectedTheme={selectedTheme}
                        onChangeSelectedTheme={onChangeSelectedTheme}
                     />
                     <DashboardBody
                        bgColor={selectedTheme.backgroundColor}
                        color={selectedTheme.color}
                     >
                        <FilterBar
                           onChangeSearchText={this.onChangeSearchText}
                           onChangeSelectedRegion={this.onChangeSelectedRegion}
                           regions={this.getRegionNames()}
                           selectedTheme={selectedTheme}
                        />
                        {this.props.countries !== null &&
                        this.state.searchText !== null &&
                        displayCountries.length === 0 ? (
                           <p className="bold">
                              Can't Find {this.state.searchText} in{" "}
                              {this.state.selectedRegion} Region
                           </p>
                        ) : (
                           <Countries
                              countries={displayCountries}
                              searchText={this.state.searchText}
                              selectedTheme={selectedTheme}
                              selectedRegion={this.state.selectedRegion}
                           />
                        )}
                     </DashboardBody>
                  </RootContainer>
               )}
            </ThemeContext.Consumer>
         );
      }
   }
}
export default withCountries(Covid19Dashboard);

//<img src="https://tenor.com/view/loading-fast-gif-14829442"/>

//<img src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"/>

//alternates :

// import axios from "axios";
// getCountries = async () => {
//     let response = await axios.get("https://restcountries.eu/rest/v2/all");
//     let { data } = response;
//     this.setState({ countries: data });
// }
// if (this.props.countries !== null && this.state.searchText !== null && displayCountries.length === 0) {
//     return (<div>
//         <Header theme={this.props.theme} onChangeSelectedTheme={this.props.onChangeSelectedTheme} />
//         <FilterBar onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion} regions={this.getRegionNames()} theme={this.props.theme} />
//         <p className="bold">Can't Find {this.state.searchText} in {this.state.selectedRegion} Region</p>
//     </div>);
// }

// else if (this.props.countries !== null) {

//     return (
//         <div className={`covid19-dashboard ${this.props.theme}`}>
//             <Header theme={this.props.theme} onChangeSelectedTheme={this.props.onChangeSelectedTheme} />
//             <div className="covid19-dashboard-body">
//                 <FilterBar onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion} regions={this.getRegionNames()} theme={this.props.theme} />
//                 <Countries history={this.props} countries={displayCountries} searchText={this.state.searchText} theme={this.props.theme} selectedRegion={this.state.selectedRegion} />
//             </div>
//         </div>

//     );
// }
