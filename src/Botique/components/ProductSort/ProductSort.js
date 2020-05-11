import React, { Component } from "react";
import { SortBar, DisplayedProductsCount, Dropdown } from "./styledComponents";
import { observer } from "mobx-react";

const SORTING_OPTIONS = [
   { value: "Select", displayname: "Select", isHidden: true },
   { value: "ASCENDING", displayname: "Lowest to highest", isHidden: false },
   { value: "DESCENDING", displayname: "Highest to lowest", isHidden: false },
];

@observer
class ProductSort extends Component {
   onChangeSortBy = (event) => {
      const { onChangeSortBy } = this.props;

      onChangeSortBy(event.target.value);
   };
   render() {
      const { totalNoOfProductsDisplayed } = this.props;
      return (
         <SortBar>
            <DisplayedProductsCount>
               {totalNoOfProductsDisplayed} Product(s) Found.
            </DisplayedProductsCount>
            <Dropdown
               id="ProductsSort"
               data-testid="sort-by-dropdown"
               placeholder="Select"
               onChange={this.onChangeSortBy}
            >
               {SORTING_OPTIONS.map((sortBy) => (
                  <option
                     key={sortBy.value}
                     value={sortBy.value}
                     hidden={sortBy.isHidden}
                  >
                     {sortBy.displayname}
                  </option>
               ))}
            </Dropdown>
         </SortBar>
      );
   }
}

export { ProductSort };
