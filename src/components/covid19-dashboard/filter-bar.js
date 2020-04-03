/**@jsx jsx */
import { css } from "emotion";
import { jsx } from "@emotion/core";
import React from "react";
import { GoSearch } from "react-icons/go";
// import { App } from "../../App";

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
            <select
                css={{
                    height: "60px",
                    width: "120px",
                    borderRadius: "3px",
                    // border: this.props.selectedTheme.color,
                    backgroundColor: this.props.selectedTheme.secondaryBgColor,
                    color: this.props.selectedTheme.color,
                    boxShadow: this.props.selectedTheme.shadow,
                }
                }
                onChange={this.onChangeSelectedRegion} defaultValue={this.props.regions[0]} >

                {
                    this.props.regions.map((region) =>
                        <option key={region} >{region}</option>
                    )
                }
            </select>
        );
    }

    render() {
        return (
            <div
                css={{
                    height: "3%",
                    width: "93%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "30px",
                    flexWrap: "wrap",

                    backgroundColor: this.props.selectedTheme.backgroundColor,
                    color: this.props.selectedTheme.color,
                }
                }>

                <div
                    css={{
                        padding: "5px",
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        margin: "10px",

                        backgroundColor: this.props.selectedTheme.secondaryBgColor,
                        boxShadow: this.props.selectedTheme.shadow,
                        color: this.props.selectedTheme.color,
                    }}>
                    <GoSearch className="search-box-image" />
                    <input
                        css={{
                            height: "50px",
                            fontSize: "20px",
                            border: "none",
                            borderRadius: "3px",
                            marginLeft: "5px",

                            backgroundColor: this.props.selectedTheme.secondaryBgColor,
                            color: this.props.selectedTheme.color,
                        }}
                        onChange={this.onChangeSearchText} type="text" placeholder="Search for a country..." value={this.props.searchText} />
                </div>
                {this.renderDropdown()}
            </div >
        );
    }
}
export default FilterBar;