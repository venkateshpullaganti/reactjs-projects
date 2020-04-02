import React from "react";
import { GoSearch } from "react-icons/go";


import "./filter-bar.css";


class FilterBar extends React.Component {

    onChangeSelectedRegion = (event) => {
        this.props.onChangeSelectedRegion(event.target.value);
    }

    onChangeSearchText = (event) => {
        this.props.onChangeSearchText(event.target.value.trim());
    }

    renderDropdown = () => {
        return (
            <select onChange={this.onChangeSelectedRegion} className={`dropdown ${this.props.theme}-dropdown `} defaultValue={this.props.regions[0]} >

                {this.props.regions.map((region) =>
                    <option key={region} >{region}</option>
                )}
            </select>
        );
    }

    render() {
        return (
            <div className="filter-bar">
                <div className={`search-box-container ${this.props.theme}-search-box-container`}>
                    <GoSearch className="search-box-image" />
                    <input onChange={this.onChangeSearchText} className={`search-box ${this.props.theme}-search-box`} type="text" placeholder="Search for a country..." value={this.props.searchText} />
                </div>
                {this.renderDropdown()}
            </div>
        );
    }
}
export default FilterBar;