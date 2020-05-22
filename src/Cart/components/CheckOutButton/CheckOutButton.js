import React, { Component } from 'react'

import { CheckOutBtn } from './styledComponents'

class CheckOutButton extends Component {
   OnCheckOut = () => {
      const { OnCheckOut } = this.props
      OnCheckOut()
      alert(
         'Thankyou for Shopping. Your products will not be delivered due to COVID-19. Stay Home,Stay Safe. 😉'
      )
   }
   render() {
      const { noOfProductsInCart, background, width, displayText } = this.props
      return (
         <CheckOutBtn
            data-testid='checkout-button'
            disabled={noOfProductsInCart === 0}
            onClick={this.OnCheckOut}
            background={background}
            width={width}
         >
            {displayText}
         </CheckOutBtn>
      )
   }
}

CheckOutButton.defaultProps = {
   background: 'black',
   width: 90, //in percentage
   noOfProductsInCart: 0,
   displayText: 'CHECKOUT'
}

export default CheckOutButton
