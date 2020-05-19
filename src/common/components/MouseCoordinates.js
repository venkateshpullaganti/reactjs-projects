import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class MouseCoordinates extends Component {
   @observable mouse = {
      mouseX: 786,
      mouseY: 234,
   };
   handleMouseMovement = (event) => {
      this.mouse = {
         mouseX: event.clientX,
         mouseY: event.clientY,
      };
   };
   render() {
      return (
         <div className="self-center" onMouseMove={this.handleMouseMovement}>
            <p>DisplayMouseCoordinates</p>
            {this.props.render(this.mouse)}
         </div>
      );
   }
}

export default MouseCoordinates;
