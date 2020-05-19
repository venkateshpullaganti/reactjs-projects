import React from "react";

function withCountries(WrappedComponent) {
   class EnhancedComponent extends React.Component {
      constructor(props) {
         super(props);
         this.state = {
            countries: [],
            errorMessage: null,
            isLoading: true,
         };
      }

      componentDidMount() {
         this.getData();
      }
      async getData() {
         try {
            const response = await fetch(
               "https://restcountries.eu/rest/v2/all"
            );
            if (response.ok) {
               const json = await response.json();
               this.setState({ countries: json, isLoading: false });
            } else {
               throw Error(response.statusText);
            }
         } catch (error) {
            this.setState({
               isLoading: false,
               errorMessage: error.message,
            });
         }
      }

      render() {
         const { countries, isLoading, errorMessage } = this.state;

         return (
            <WrappedComponent
               countries={countries}
               isLoading={isLoading}
               errorMessage={errorMessage}
               {...this.props}
            />
         );
      }
   }
   return EnhancedComponent;
}

export default withCountries;
