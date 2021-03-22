/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import './countrycard.css'
import { withRouter } from 'react-router-dom'

class CountryCard extends React.Component {
   navigateToSpecifiedCountry = () => {
      const { history } = this.props

      history.push({
         pathname: `/countries-dashboard/details/${this.props.country.alpha3Code}`
      })
   }

   render() {
      return (
         <li
            css={{
               margin: '30px',
               borderRadius: '4px',
               height: '340px',
               width: '230px',

               backgroundColor: this.props.selectedTheme.secondaryBgColor,
               color: this.props.selectedTheme.color,
               boxShadow: this.props.selectedTheme.shadow
               // transition: "all 1s",
            }}
            onClick={this.navigateToSpecifiedCountry}
            className={` hvr-grow`}
            key={this.props.country.name}
         >
            <div className='flag-container'>
               <img
                  className='flag'
                  alt='this.props.country.name'
                  src={this.props.country.flag}
               />
            </div>
            <div className='country-info'>
               <p className='bold'>{this.props.country.name}</p>
               <p>
                  <span className='bold'>Population:</span>{' '}
                  {this.props.country.population}
               </p>
               <p>
                  <span className='bold'>Region:</span>{' '}
                  {this.props.country.region}
               </p>
               <p>
                  <span className='bold'>Capital:</span>{' '}
                  {this.props.country.capital}
               </p>
            </div>
         </li>
      )
   }
}

export default withRouter(CountryCard)
