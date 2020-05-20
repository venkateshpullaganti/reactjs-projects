import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, autorun, action } from "mobx";

import withFormatCurrency from "../../common/hocs/withFormatCurrency";

@observer
class Practice extends Component {
   @observable width = 100;

   expandWidth = () => {
      this.width = 300;
   };
   render() {
      return (
         <div className="flex m-4">
            <p className="m-4"> {this.props.totalCartAmount}</p>
            <button onClick={this.expandWidth}>...</button>
         </div>
      );
   }
}

export default withFormatCurrency(Practice);