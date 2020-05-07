import React, { Component } from "react";
import { observer } from "mobx-react";
import { FiShoppingCart } from "react-icons/fi";

import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import Cart from "../../../Cart/components/Cart";

import Header from "../Header";
import ProductSort from "../ProductSort";
import { SideBar } from "../SideBar";

import {
   RootDiv,
   CartIcon,
   Itemscount,
   Container,
   ProductListWrapper,
} from "./styledComponents";

@observer
class EcommerceHomePage extends Component {
   render() {
      const {
         getProductListAPIStatus,
         getProductListAPIError,
         onChangeSortBy,
         totalNoOfProductsDisplayed,
         noOfProductsInCart,
         shouldShowCart,
         onClickSignOut,
         onChangeSearchText,
         onClickCart,
         SIZES,
         onSelectSize,
         doNetworkCalls,
         renderSuccessUi,
         cartStore,
         toggleCart,
      } = this.props;

      return (
         <RootDiv>
            <Header
               onClickSignOut={onClickSignOut}
               onChangeSearchText={onChangeSearchText}
            />
            <CartIcon data-testid="cart-open-button" onClick={onClickCart}>
               <FiShoppingCart className="absolute" />
               <Itemscount>{noOfProductsInCart}</Itemscount>
            </CartIcon>
            <Container>
               <SideBar sizes={SIZES} onSelectSize={onSelectSize} />
               <ProductListWrapper>
                  <ProductSort
                     onChangeSortBy={onChangeSortBy}
                     totalNoOfProductsDisplayed={totalNoOfProductsDisplayed}
                  />

                  <LoadingWrapperWithFailure
                     apiStatus={getProductListAPIStatus}
                     apiError={getProductListAPIError}
                     onRetryClick={doNetworkCalls}
                     renderSuccessUI={renderSuccessUi}
                  />
               </ProductListWrapper>
            </Container>
            <Cart
               show={shouldShowCart}
               toggleCart={toggleCart}
               cartStore={cartStore}
            />
         </RootDiv>
      );
   }
}

export default EcommerceHomePage;
