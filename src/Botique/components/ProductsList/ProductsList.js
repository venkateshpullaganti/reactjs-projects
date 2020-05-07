import React, { Component } from "react";
import { observer } from "mobx-react";

import Product from "../Product";

import { ProductListStyled } from "./styledComponents";

@observer
class ProductsList extends Component {
   renderProducts = () => {
      const { onClickAddTOCart, products } = this.props;
      return products.map((eachProduct) => {
         return (
            <Product
               key={eachProduct.productId}
               product={eachProduct}
               onClickAddTOCart={onClickAddTOCart}
            />
         );
      });
   };

   render() {
      return <ProductListStyled>{this.renderProducts()}</ProductListStyled>;
   }
}

export { ProductsList };
