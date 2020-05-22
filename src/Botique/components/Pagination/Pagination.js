import React, { Component } from 'react'

import {
   Container,
   LeftArrow,
   PresentPage,
   Slash,
   TotoalPages,
   RightArrow
} from './styledComponents'

class Pagination extends Component {
   render() {
      const {
         navigateToPreviousPage,
         navigateToNextPage,
         presentPage,
         totalPages
      } = this.props
      console.log('render', totalPages)
      return (
         <Container>
            <LeftArrow
               onClick={navigateToPreviousPage}
               disabled={presentPage === 1}
            >
               {'<'}
            </LeftArrow>
            <PresentPage>{presentPage}</PresentPage>
            <Slash>/</Slash>
            <TotoalPages>{totalPages}</TotoalPages>
            <RightArrow
               onClick={navigateToNextPage}
               disabled={totalPages === presentPage}
            >
               {'>'}
            </RightArrow>
         </Container>
      )
   }
}
Pagination.defaultProps = {
   presentPage: 2,
   totalPages: 6
}

export { Pagination }
