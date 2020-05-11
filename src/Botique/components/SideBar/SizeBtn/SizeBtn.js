import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { SizeButton } from "./styledComponents";

@observer
class SizeBtn extends Component {
   @observable isSeleced;
   size;
   constructor(props) {
      super(props);
      this.isSeleced = false;
      this.size = props.size;
   }
   onSelectSize = () => {
      const { onSelectSize } = this.props;
      this.isSeleced = !this.isSeleced;
      onSelectSize(this.size);
   };
   render() {
      return (
         <SizeButton
            data-testid="size-button"
            isSelected={this.isSeleced}
            onClick={this.onSelectSize}
         >
            {this.size}
         </SizeButton>
      );
   }
}

export { SizeBtn };
