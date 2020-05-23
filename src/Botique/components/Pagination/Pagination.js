import React, { Component } from 'react'

import {
   Container,
   ArrowBtn,
   PresentPage,
   Slash,
   TotoalPages
} from './styledComponents'

class Pagination extends Component {
   render() {
      const {
         navigateToPreviousPage,
         navigateToNextPage,
         presentPage,
         totalPages
      } = this.props
      // alert(`${presentPage}, ${totalPages}`)
      return (
         <Container>
            <ArrowBtn
               onClick={navigateToPreviousPage}
               disabled={presentPage === 1}
            >
               {'<'}
            </ArrowBtn>
            <PresentPage>{presentPage}</PresentPage>
            <Slash>/</Slash>
            <TotoalPages>{totalPages}</TotoalPages>
            <ArrowBtn
               onClick={navigateToNextPage}
               disabled={totalPages === presentPage}
            >
               {'>'}
            </ArrowBtn>
         </Container>
      )
   }
}
Pagination.defaultProps = {
   presentPage: 2,
   totalPages: 6
}

export { Pagination }
