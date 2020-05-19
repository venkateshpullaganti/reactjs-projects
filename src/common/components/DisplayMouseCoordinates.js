import React, { Component } from "react";

class DisplayMouseCoordinates extends Component {
   render() {
      const { mouseX, mouseY } = this.props.mouse;
      return (
         <div className="flex m-2">
            <p className="text-lg font-bold">The mouse position is:</p>
            <p>
               ({mouseX},{mouseY})
            </p>
         </div>
      );
   }
}

export default DisplayMouseCoordinates;
