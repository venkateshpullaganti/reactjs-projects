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

         if (isLoading)
            return (
               <div className="loader-container">
                  <img
                     alt="loading img"
                     src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"
                  />
               </div>
            );
         else if (errorMessage !== null)
            return (
               <p className="text-center text-xl">ERR: {errorMessage} ):</p>
            );
         else {
            return <WrappedComponent countries={countries} {...this.props} />;
         }
      }
   }
   return EnhancedComponent;
}

export default withCountries;
