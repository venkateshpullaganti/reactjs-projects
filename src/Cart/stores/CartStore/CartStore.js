import { observable, computed, action } from 'mobx'

import CartItem from '../models/CartItem'

class CartStore {
   productStore
   @observable cartProductList

   constructor(productStore) {
      this.productStore = productStore
      this.init()
   }

   init = () => {
      this.cartProductList = new Map()
   }

   @action.bound
   onClickAddToCart = productId => {
      if (!this.cartProductList.has(productId)) {
         const { productList } = this.productStore
         const product = productList.get(productId)

         const cartObj = {
            ...product,
            quantity: 1
         }
         const cartItem = new CartItem(cartObj)
         this.cartProductList.set(productId, cartItem)
      } else {
         this.cartProductList.get(productId).incrementQuantity()
      }
   }

   @action.bound
   onRemoveCartItem(productId) {
      this.cartProductList.delete(productId)
   }

   @computed
   get totalCartAmount() {
      let totalAmount = 0
      this.cartProductList.forEach((cartItem, key) => {
         totalAmount += cartItem.price * cartItem.quantity
      })
      return parseFloat(totalAmount.toFixed(2))
   }

   @computed
   get noOfProductsInCart() {
      let productsCount = 0
      this.cartProductList.forEach(
         (cartItem, key, map) => (productsCount += cartItem.quantity)
      )
      return productsCount
   }

   @computed
   get cartProductsData() {
      let products = []
      this.cartProductList.forEach((product, key) => products.push(product))
      return products
   }

   clearCart = () => {
      this.init()
   }
}
export default CartStore
