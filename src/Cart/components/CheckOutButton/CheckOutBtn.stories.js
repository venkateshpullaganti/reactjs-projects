import React from 'react'
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CheckOutButton from './CheckOutButton'

export default {
   component: CheckOutButton,
   title: 'Buttons/Checkout Button'
}

export const defaultView = () => <CheckOutButton />

const hasProductsInCart = boolean('has Products in the cart', true)

const noOfProductsInCart = hasProductsInCart ? 10 : 0

export const knob = () => (
   <CheckOutButton
      OnCheckOut={action('On Click')}
      displayText={text('Name', 'CheckOut')}
      background={color('Background', 'black')}
      width={number('Width (%)', 90)}
      noOfProductsInCart={noOfProductsInCart}
   />
)

knob.story = {
   decorators: [withKnobs]
}
