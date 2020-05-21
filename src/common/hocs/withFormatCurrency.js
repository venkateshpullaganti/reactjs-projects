import React from 'react'

function withFormatCurrency(WrappedComponent) {
   class EnhancedComponent extends React.Component {
      formatCurrency = () => {
         const { totalCartAmount } = this.props
         const { currencyType } = this.props
         let formattedAmount = 0

         if (
            currencyType === undefined ||
            currencyType.toLowerCase() === 'rupee'
         ) {
            formattedAmount = new Intl.NumberFormat('en-IN', {
               style: 'currency',
               currency: 'INR'
            }).format(totalCartAmount)
         } else if (currencyType === 'dollar') {
            formattedAmount = new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD'
            }).format(totalCartAmount)
         }
         return formattedAmount
      }

      render() {
         const { totalCartAmount, ...rest } = this.props
         return (
            <WrappedComponent
               formattedAmount={this.formatCurrency()}
               {...rest}
            />
         )
      }
   }
   return EnhancedComponent
}
export default withFormatCurrency
