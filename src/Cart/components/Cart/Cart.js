import React, { Component } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { observer } from 'mobx-react'

import { CartList } from '../CartList'
import { SubTotal } from '../SubTotal'
import CheckOutButton from '../CheckOutButton'

import {
   CartContainer,
   CloseBtn,
   CartIcon,
   Itemscount,
   CartTxt,
   CartHeader,
   Footer,
   CartSubHeader
} from './styledComponents'

@observer
class Cart extends Component {
   render() {
      const { show, toggleCart } = this.props
      const {
         noOfProductsInCart,
         totalCartAmount,
         onRemoveCartItem,
         cartProductList,
         clearCart
      } = this.props.cartStore

      return (
         <CartContainer show={show}>
            <CartHeader>
               <CloseBtn
                  data-testid='cart-close-button'
                  show={show}
                  onClick={toggleCart}
               >
                  X
               </CloseBtn>
               <CartSubHeader>
                  <CartIcon onClick={this.onClickCart}>
                     <FiShoppingCart className='absolute' />
                     <Itemscount>{noOfProductsInCart}</Itemscount>
                  </CartIcon>
                  <CartTxt>Cart</CartTxt>
               </CartSubHeader>
            </CartHeader>
            <CartList
               productsInCart={cartProductList}
               onRemoveCartItem={onRemoveCartItem}
            />
            <Footer>
               <SubTotal totalCartAmount={totalCartAmount} />
               <CheckOutButton
                  noOfProductsInCart={noOfProductsInCart}
                  OnCheckOut={clearCart}
               />
            </Footer>
         </CartContainer>
      )
   }
}

export default Cart
