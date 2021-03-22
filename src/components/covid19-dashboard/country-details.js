/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { reaction } from 'mobx'

import './country-details.css'
import Header from './header.js'
import { MdArrowBack } from 'react-icons/md'
import withCountries from '../../components/common/hocs/withCountries'

import {
   StyledBtn,
   NavigatorDiv,
   CountryDetailsDiv,
   BorderBtn,
   Bold
} from './styledComponents'

class CountryDetails extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         country: null
      }
   }

   componentDidMount() {
      this.getCurrentCountry()
   }
   navigateToSpecifiedCountry = country => {
      const { history } = this.props

      history.push({
         pathname: `/countries-dashboard/details/${country.alpha3Code}`
      })
      this.setState({ country: country })
   }

   getCurrentCountry = () => {
      const { countries } = this.props
      const alpha3Code = this.props.match.params.countryId

      if (countries !== null) {
         const currentCountry = countries.find(
            country => country.alpha3Code === alpha3Code
         )
         this.setState({ country: currentCountry })
      }
   }

   renderBorderCountries = () => {
      const { countries } = this.props
      const bordernNations = this.state.country.borders
      const borderCountries = countries.filter(territory =>
         bordernNations.includes(territory.alpha3Code)
      )
      if (borderCountries.length > 0) {
         return (
            <div>
               <h3>Border Countries:</h3>
               <div className='border-countries-btn-container'>
                  {borderCountries.map(country => (
                     <BorderBtn
                        selectedTheme={this.props.selectedTheme}
                        className={`btn rounded`}
                        onClick={() => this.navigateToSpecifiedCountry(country)}
                        key={country.alpha3Code}
                     >
                        {country.name}
                     </BorderBtn>
                  ))}
               </div>
            </div>
         )
      } else {
         return <h3>No Border Countries for {this.state.country.name}.</h3>
      }
   }

   goToDashboard = () => {
      const { history } = this.props
      history.push({
         pathname: `/countries-dashboard`
      })
   }
   goBack = () => {
      window.history.back()

      this.getCurrentCountry()
   }

   render() {
      console.log(this.state.country)
      if (this.state.country !== null)
         return (
            <CountryDetailsDiv selectedTheme={this.props.selectedTheme}>
               <Header
                  selectedTheme={this.props.selectedTheme}
                  onChangeSelectedTheme={this.props.onChangeSelectedTheme}
               />
               <NavigatorDiv>
                  <StyledBtn
                     selectedTheme={this.props.selectedTheme}
                     className={`btn`}
                     type='button'
                     onClick={this.goBack}
                  >
                     {' '}
                     <MdArrowBack className='m-2' /> Back
                  </StyledBtn>
                  <button
                     css={{
                        backgroundColor: this.props.selectedTheme
                           .secondaryBgColor,
                        color: this.props.selectedTheme.color
                     }}
                     className={`p-2 m-2 rounded btn`}
                     type='button'
                     onClick={this.goToDashboard}
                  >
                     Dashboard
                  </button>
               </NavigatorDiv>
               <div className='flex justify-center'>
                  <div className='w-2/5'>
                     <img
                        css={{
                           width: '350px',
                           height: '300px'
                        }}
                        alt={this.state.country.name}
                        src={this.state.country.flag}
                     />
                  </div>

                  <div className='w-1/2'>
                     <h3>{this.state.country.name}</h3>
                     <div css={{ display: 'flex' }}>
                        <div>
                           <p>
                              <Bold>Native Name:</Bold>{' '}
                              {this.state.country.nativeName}
                           </p>
                           <p>
                              <Bold>Population:</Bold>{' '}
                              {this.state.country.population}
                           </p>
                           <p>
                              <Bold>Region: </Bold>
                              {this.state.country.region}
                           </p>
                           <p>
                              <Bold>SubRegion: </Bold>
                              {this.state.country.subregion}
                           </p>
                           <p>
                              <Bold>Capital: </Bold>
                              {this.state.country.capital}
                           </p>
                        </div>
                        <div>
                           <p>
                              <Bold>Top Level Domain: </Bold>
                              {this.state.country.topLevelDomain}
                           </p>

                           <p>
                              <Bold>Languages:</Bold>
                           </p>
                        </div>
                     </div>
                     {this.renderBorderCountries()}
                  </div>
               </div>
            </CountryDetailsDiv>
         )
      else
         return (
            <div className='loader-container'>
               <img
                  alt='loading img'
                  src='https://media.tenor.com/images/2c124ed4343997f40770a255a4f2e451/tenor.gif'
               />
               <Bold>Loading...</Bold>
            </div>
         )
   }
}
export default withRouter(withCountries(CountryDetails))

// <img src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"/>
//<img src="https://media1.tenor.com/images/8541c07f20eba85d78f2ef7087ee1a0e/tenor.gif?itemid=15295932"/>
