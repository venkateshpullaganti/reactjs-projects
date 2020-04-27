import React, { Component } from "react";
import { SortBar, DisplayedProductsCount, Dropdown } from "./styledComponents";
import { observer } from "mobx-react";

const SORTING_OPTIONS = [
    { value: "All", displayname: "All" },
    { value: "Descending", displayname: "Highest to lowest" },
    { value: "Asending", displayname: "Lowest to highest" },
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
                    placeholder="Select"
                    onChange={this.onChangeSortBy}
                >
                    {SORTING_OPTIONS.map((sortBy) => (
                        <option key={sortBy.value} value={sortBy.value}>
                            {sortBy.displayname}
                        </option>
                    ))}
                </Dropdown>
            </SortBar>
        );
    }
}

export { ProductSort };
