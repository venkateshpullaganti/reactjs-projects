import React, { Component } from "react";
import { observer } from "mobx-react";

import SizeBtn from "./SizeBtn";
import {
   SizesContainer,
   Heading,
   Sizes,
   SideBarStyled,
} from "./styledComponents";

@observer
class SideBar extends Component {
   sizes;
   constructor(props) {
      super(props);
      this.sizes = props.sizes;
   }
   onSelectSize = (selectedSize) => {
      const { onSelectSize } = this.props;
      onSelectSize(selectedSize);
   };
   renderSizeButtons = () => {
      return this.sizes.map((eachSize) => (
         <SizeBtn
            key={Math.random()}
            size={eachSize}
            onSelectSize={this.onSelectSize}
         />
      ));
   };
   render() {
      return (
         <SideBarStyled>
            <SizesContainer>
               <Heading>Sizes:</Heading>
               <Sizes>{this.renderSizeButtons()}</Sizes>
            </SizesContainer>
         </SideBarStyled>
      );
   }
}

export default SideBar;
