/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import CountryCard from "./country-card.js";

import { CountriesList } from "./styledComponents";

class Countries extends React.Component {
   renderCountries = () => {
      if (this.props.countries.length) {
         return this.props.countries.map((country) => (
            <CountryCard
               selectedTheme={this.props.selectedTheme}
               key={country.name}
               country={country}
            />
         ));
      }
   };

   render() {
      return (
         <CountriesList
         // css={{
         //    display: "flex",
         //    flexWrap: "wrap",
         //    justifyContent: "center",
         // }}
         >
            {this.renderCountries()}
         </CountriesList>
      );
   }
}

export default Countries;

// else if(this.props.countriesData.length > 0)
// {
//     return (<h3>Sorry, Can't find {this.props.searchText} in {this.props.selectedRegion==="All"? "All regions ":this.state.selectedRegion+" region " } ):</h3>)
// }
