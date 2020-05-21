import React, { Component } from 'react'
import withCountries from './withCountries'
import { render, waitFor } from '@testing-library/react'

describe('withCountries hoc tests', () => {
   it('should test the countries send as props', async () => {
      class WrappedComponent extends Component {
         render() {
            return <div>{this.props.countries.length}</div>
         }
      }
      const EnhancedComponent = withCountries(WrappedComponent)
      const { getByText } = render(<EnhancedComponent />)
      await waitFor(() => getByText('250'))
   })
})
