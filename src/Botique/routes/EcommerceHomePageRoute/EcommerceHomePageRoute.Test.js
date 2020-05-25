import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import {
   E_COMMERCE_SIGN_IN_PATH,
   E_COMMERCE_PRODUCTS_PATH
} from '../../../constants/RouteConstants'
import AuthStore from '../../../Authentication/stores/AuthStore'
import AuthService from '../../../Authentication/services/AuthService'
import CartStore from '../../../Cart/stores/CartStore'
import getProductsResponse from '../../../fixtures/getProductsResponse.json'

import { PaginationProductStore } from '../../stores/PaginationProductStore'
import PaginationProductService from '../../services/PaginationProductService'

import productsTestFixtures from '../../../fixtures/productsTestFixtures.json'

import { EcommerceHomePageRoute } from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

//Note while Running test cases set PAGINATION_LIMIT to 16. Otherwise edit we have to edit the productsResponse, Testfixtures and the test cases.

describe('Ecommerce home route tests', () => {
   let paginationProductStore
   let paginationProductService
   let authStore
   let authService
   let cartStore

   beforeEach(() => {
      paginationProductService = new PaginationProductService()
      paginationProductStore = new PaginationProductStore(
         paginationProductService
      )
      authService = new AuthService()
      authStore = new AuthStore(authService)
      cartStore = new CartStore(paginationProductStore)
   })
   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should navigate to signin page on signout', () => {
      const history = createMemoryHistory()
      const route = E_COMMERCE_PRODUCTS_PATH
      history.push(route)

      const { getByTestId, getByRole, debug } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={history}>
               <Route path={E_COMMERCE_PRODUCTS_PATH}>
                  <EcommerceHomePageRoute />
               </Route>
               <Route path={E_COMMERCE_SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )
      //debug();

      const signOutBtn = getByRole('button', { name: 'Sign Out' })
      fireEvent.click(signOutBtn)

      expect(getByTestId('location-display')).toHaveTextContent(
         E_COMMERCE_SIGN_IN_PATH
      )
      expect(signOutBtn).not.toBeInTheDocument()
   })

   it('should render loading on API fetching', async () => {
      const mockProductFetchingPromise = new Promise(function(
         resolve,
         reject
      ) {})

      const mockProductsApi = jest.fn()
      mockProductsApi.mockReturnValue(mockProductFetchingPromise)
      paginationProductService.getProductsAPI = mockProductsApi

      const { getByLabelText, debug } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={createMemoryHistory()}>
               <EcommerceHomePageRoute />
            </Router>
         </Provider>
      )

      await waitFor(() => {
         getByLabelText(/audio-loading/)
      })
      // debug();
   })

   it('should render products on API success', async () => {
      const mockProductSuccessPromise = new Promise(resolve =>
         resolve(getProductsResponse)
      )

      const mockProductsApi = jest.fn()
      mockProductsApi.mockReturnValue(mockProductSuccessPromise)
      paginationProductService.getProductsAPI = mockProductsApi

      const { debug, getAllByRole } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={createMemoryHistory()}>
               <EcommerceHomePageRoute />
            </Router>
         </Provider>
      )

      await waitFor(() => {
         expect(paginationProductStore.getProductListAPIStatus).toBe(200)

         expect(getAllByRole('button', { name: 'Add to cart' }).length).toEqual(
            16
         )
      })
   })

   it('should render error on API Error', async () => {
      const mockProductFailurePromise = new Promise((resolve, reject) =>
         reject()
      )

      const mockProductsApi = jest.fn()
      mockProductsApi.mockReturnValue(mockProductFailurePromise)
      paginationProductService.getProductsAPI = mockProductsApi

      const { getByRole, getByText, debug } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={createMemoryHistory()}>
               <EcommerceHomePageRoute />
            </Router>
         </Provider>
      )

      await waitFor(() => {
         getByText(/Something went wrong please try again/i)
         getByRole('button', { name: 'Retry' })
      })
      // debug();
   })

   it('it should render products based on filters', () => {
      const {
         getByRole,
         getAllByRole,
         getByPlaceholderText,
         getByTestId
      } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={createMemoryHistory()}>
               <EcommerceHomePageRoute />
            </Router>
         </Provider>
      )
      paginationProductStore.setGetProductListAPIStatus(200)
      paginationProductStore.setProductListResponse(getProductsResponse)

      const smallBtn = getByRole('button', { name: 'S' })
      const xxlBtn = getByRole('button', { name: 'XXL' })
      const search = getByPlaceholderText('Search Products')

      fireEvent.click(smallBtn)
      expect(getAllByRole('button', { name: 'Add to cart' }).length).toEqual(4)

      fireEvent.click(xxlBtn)
      expect(getAllByRole('button', { name: 'Add to cart' }).length).toEqual(7)

      fireEvent.change(search, { target: { value: 'shirt' } })

      expect(getAllByRole('button', { name: 'Add to cart' }).length).toEqual(6)

      fireEvent.change(getByTestId('sort-by-dropdown'), {
         target: { value: 'DESCENDING' }
      })
      let renderedproducts = paginationProductStore.products

      expect(renderedproducts.length).toEqual(productsTestFixtures.length)

      expect(renderedproducts[3].title).toBe(productsTestFixtures[3].title)
      expect(renderedproducts[5].title).toBe(productsTestFixtures[5].title)
      expect(renderedproducts[4].price).toEqual(productsTestFixtures[4].price)
      expect(renderedproducts[2].printStyle).toBe(
         productsTestFixtures[2].printStyle
      )
      expect(renderedproducts[0].availableSizes).toEqual(
         productsTestFixtures[0].availableSizes
      )
   })
   it('should render products in cart on click add to cart, empty cart on Checkout and close cart Button', () => {
      const { getByRole, getAllByRole, getAllByTestId, getByTestId } = render(
         <Provider
            paginationProductStore={paginationProductStore}
            authStore={authStore}
            cartStore={cartStore}
         >
            <Router history={createMemoryHistory()}>
               <EcommerceHomePageRoute />
            </Router>
         </Provider>
      )
      paginationProductStore.setGetProductListAPIStatus(200)
      paginationProductStore.setProductListResponse(getProductsResponse)

      const xsBtn = getByRole('button', { name: 'XS' })

      fireEvent.click(xsBtn)
      const addToCartBtns = getAllByRole('button', { name: 'Add to cart' })

      fireEvent.click(addToCartBtns[0])
      fireEvent.click(addToCartBtns[1])
      expect(cartStore.noOfProductsInCart).toEqual(2)
      expect(cartStore.totalCartAmount).toBe(1992.24)

      fireEvent.click(addToCartBtns[0])
      fireEvent.click(addToCartBtns[0])
      expect(cartStore.totalCartAmount).toEqual(4286.24)
      expect(cartStore.noOfProductsInCart).toEqual(4)

      const removeItemBtns = getAllByTestId('remove-cart-item')
      fireEvent.click(removeItemBtns[1])
      expect(cartStore.totalCartAmount).toEqual(3441)
      expect(cartStore.noOfProductsInCart).toEqual(3)

      const checkOutBtn = getByRole('button', { name: 'CHECKOUT' })
      fireEvent.click(checkOutBtn)

      expect(cartStore.noOfProductsInCart).toEqual(0)
      expect(cartStore.totalCartAmount).toBe(0)

      getByTestId('cart-close-button')
   })
})
