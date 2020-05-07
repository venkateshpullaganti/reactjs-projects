import React from "react";

import CartStore from ".";
import productStore from "../../../Botique/stores";

import getProductsResponse from "../../../fixtures/getProductsResponse.json";

describe("CartStore tests", () => {
   let cartStore;
   beforeEach(() => {
      productStore.setProductListResponse(getProductsResponse);
      cartStore = new CartStore(productStore);
   });

   it("should test the clear cartStore", () => {
      jest.spyOn(cartStore, "init");
      // cartStore.init = mockInit;

      cartStore.clearCart();
      expect(cartStore.init).toBeCalled();
   });

   it("should test onClickAddToCart and the quantity  of already added one", () => {
      let expectedOutput = getProductsResponse[0];
      cartStore.onClickAddToCart(expectedOutput.id);

      let CartItemId = cartStore.cartProductList.keys().next().value;

      expect(cartStore.noOfProductsInCart).toBe(1);
      expect(cartStore.getProductDetailsById(CartItemId).title).toBe(
         expectedOutput.title
      );
      expect(cartStore.totalCartAmount.toString()).toEqual(
         expectedOutput.price.toString()
      );

      cartStore.onClickAddToCart(expectedOutput.id);
      expect(cartStore.noOfProductsInCart).toBe(2);
      expect(cartStore.cartProductList.get(CartItemId).quantity).toEqual(2);
      expect(cartStore.cartProductsData[0].printStyle).toBe(
         expectedOutput.style
      );
   });
   it("should test cartstore onRemoveCartItem()", () => {
      cartStore.onClickAddToCart(getProductsResponse[0].id);
      cartStore.onClickAddToCart(getProductsResponse[7].id);

      expect(cartStore.noOfProductsInCart).toBe(2);
      expect(cartStore.totalCartAmount.toString()).toEqual("1992.24");
      expect(cartStore.cartProductsData.length).toEqual(2);

      let ids = cartStore.cartProductList.keys();

      let firstItemId = ids.next().value;
      let secondItemId = ids.next().value;

      cartStore.onRemoveCartItem(secondItemId);
      expect(cartStore.noOfProductsInCart).toBe(1);
      expect(cartStore.getProductDetailsById(firstItemId).title).toBe(
         getProductsResponse[0].title
      );
      expect(cartStore.totalCartAmount.toString()).toEqual(
         getProductsResponse[0].price.toString()
      );
   });
});
