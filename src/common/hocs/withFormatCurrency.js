import React from "react";

function withFormatCurrency(WrappedComponent, currencyType) {
   class EnhancedComponent extends React.Component {
      formatCurrency = () => {
         const { totalCartAmount } = this.props;
         let formattedAmount = 0;

         if (currencyType === undefined || currencyType.toLower() === "rupee") {
            formattedAmount = new Intl.NumberFormat("en-IN", {
               style: "currency",
               currency: "INR",
            }).format(totalCartAmount);
         }

         if (currencyType === "dollar") {
            formattedAmount = new Intl.NumberFormat("en-US", {
               style: "currency",
               currency: "USD",
            }).format(totalCartAmount);
         }
         return formattedAmount;
      };

      render() {
         const { totalCartAmount, ...rest } = this.props;

         return (
            <WrappedComponent
               //    totalCartAmount={this.formattedAmount}
               formattedAmount={this.formatCurrency()}
               {...rest}
            />
         );
      }
   }
   return EnhancedComponent;
}
export default withFormatCurrency;
