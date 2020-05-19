import React, { Component } from "react";
import { observable } from "mobx";

import withToggle from "../hocs/withToggle";
import { observer } from "mobx-react";

@observer
class ViewEditToggle extends Component {
   @observable text = "Click on the edit button to start editing";
   onChangeText = (e) => {
      this.text = e.target.value;
   };

   render() {
      const { toggleStatus, onToggle } = this.props;
      return (
         <div className="bg-teal-100 p-4 text-center">
            <p className="text-xl font-bold">ViewEditToggle</p>
            {toggleStatus ? (
               <input
                  className="border-solid border-2 border-indigo-600 p-1 focus:outline-none "
                  value={this.text}
                  onChange={this.onChangeText}
               />
            ) : (
               <p className="inline-block p-2">{this.text}</p>
            )}
            <button
               className="m-2 bg-blue-600 text-white p-2 rounded focus:outline-none"
               onClick={onToggle}
            >
               {toggleStatus ? "Cancel" : "Edit"}
            </button>
         </div>
      );
   }
}

export default withToggle(ViewEditToggle);
