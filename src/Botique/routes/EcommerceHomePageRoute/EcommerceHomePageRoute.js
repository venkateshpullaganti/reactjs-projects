import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import cookieconsent from 'cookieconsent'

import EcommerceHomePage from '../../components/EcommerceHomePage'
import { SIZES } from '../../constants/ProductsConstants'

import { E_COMMERCE_SIGN_IN_PATH } from '../../../constants/RouteConstants'

import { CookieConsentDiv, Root } from './styledComponents'

window.cookieconsent.initialise({
   container: { CookieConsentDiv },
   palette: {
      popup: {
         background: '#252e39'
      },
      button: { background: '#14a7d0' }
   },
   revokable: true,
   onStatusChange: function(status) {
      console.log(this.hasConsented() ? 'enable cookies' : 'disable cookies')
   },
   theme: 'classic',
   type: 'opt-out',
   position: 'bottom-left',
   static: false,
   content: {
      header: 'Cookies used on the website!',
      message: 'We use cookies to ensure you get best userexperience.',
      dismiss: 'Got it!',
      allow: 'Allow cookies',
      deny: 'Decline',
      link: 'Learn more',
      href: 'https://www.cookiesandyou.com',
      close: '&#x274c;',
      policy: 'Cookie Policy',
      target: 'www.google.com'
   }
})

@inject('authStore', 'paginationProductStore', 'cartStore')
@observer
class EcommerceHomePageRoute extends Component {
   @observable shouldShowCart
   constructor(props) {
      super(props)
      this.shouldShowCart = false
   }

   componentDidMount() {
      this.doNetworkCalls()
   }

   get productStore() {
      return this.props.paginationProductStore
   }

   get authStore() {
      return this.props.authStore
   }
   get cartStore() {
      return this.props.cartStore
   }
   @action
   doNetworkCalls = () => {
      this.productStore.getProductList()
   }
   onClickAddTOCart = productId => {
      const { onClickAddToCart } = this.cartStore

      onClickAddToCart(productId)
   }
   // renderSuccessUi = observer(() => {
   //    const { products } = this.productStore;

   //    return (
   //       <ProductList
   //          products={products}
   //          onClickAddTOCart={this.onClickAddTOCart}
   //       />
   //    );
   // });

   onClickSignOut = () => {
      const { history } = this.props

      this.productStore.clearStore()
      this.authStore.userSignOut()
      history.replace(E_COMMERCE_SIGN_IN_PATH)
   }
   onSelectSize = selectedSize => {
      const { onSelectSize } = this.productStore
      onSelectSize(selectedSize)
   }
   onClickCart = () => {
      this.shouldShowCart = !this.shouldShowCart
   }
   toggleCart = () => {
      this.shouldShowCart = !this.shouldShowCart
   }

   onChangeSearchText = searchText => {
      const { onChangeSearchText } = this.productStore

      onChangeSearchText(searchText)
   }

   render() {
      const {
         getProductListAPIStatus,
         getProductListAPIError,
         onChangeSortBy,
         totalNoOfProductsDisplayed,
         products,
         navigateToPreviousPage,
         navigateToNextPage,
         presentPage,
         totalPages
      } = this.productStore

      const { noOfProductsInCart } = this.cartStore

      const {
         shouldShowCart,
         onClickSignOut,
         onChangeSearchText,
         onClickCart,
         onSelectSize,
         doNetworkCalls,
         toggleCart,
         cartStore,
         onClickAddTOCart
      } = this

      const ecommerceProps = {
         getProductListAPIStatus,
         getProductListAPIError,
         onChangeSortBy,
         totalNoOfProductsDisplayed,
         noOfProductsInCart,
         shouldShowCart,
         cartStore,
         SIZES,
         onClickSignOut,
         onChangeSearchText,
         onClickCart,
         onSelectSize,
         doNetworkCalls,
         toggleCart,
         onClickAddTOCart,
         products,
         navigateToPreviousPage,
         navigateToNextPage,
         presentPage,
         totalPages
      }

      return (
         <Root>
            <EcommerceHomePage {...ecommerceProps} />
            <CookieConsentDiv />
         </Root>
      )
   }
}

export default withRouter(EcommerceHomePageRoute)
