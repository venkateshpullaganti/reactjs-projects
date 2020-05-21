import React, { Component } from 'react'
import withFormatCurrency from './withFormatCurrency'
import { render } from '@testing-library/react'

describe('withFormatCurrency hoc tests', () => {
   it('should render the formatted amount send as props', () => {
      class WrappedComponent extends Component {
         render() {
            return <div>{this.props.formattedAmount}</div>
         }
      }

      const EnhancedComponent = withFormatCurrency(WrappedComponent)

      const { getByText, debug } = render(
         <EnhancedComponent totalCartAmount={25430.23} />
      )

      getByText('₹25,430.23')
   })
})
