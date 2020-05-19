import React, { Component } from "react";

import withToggle from "../hocs/withToggle";

class CollapseExpand extends Component {
   renderList = () => {
      const { list } = this.props;
      return list.map((item) => <li key={item}>{item}</li>);
   };

   render() {
      const { toggleStatus, onToggle, listTitle } = this.props;
      return (
         <div className="text-center">
            <p className="text-xl font-bold">CollapseExpand</p>

            <p className="inline-block">{listTitle}:</p>
            <button
               className="m-2 bg-blue-600 text-white p-2 rounded focus:outline-none"
               onClick={onToggle}
            >
               {toggleStatus ? "Collapse" : "Expand"}
            </button>
            {toggleStatus ? <ul>{this.renderList()}</ul> : <span></span>}
         </div>
      );
   }
}

export default withToggle(CollapseExpand);
