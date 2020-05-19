import React, { Component } from "react";
import withScreenSizeDetectors from "../hocs/withScreenSizeDetectors";
class DeviceTypeText extends Component {
   render() {
      const { viewPort } = this.props;

      return (
         <div className="p-4 bg-gray-300 text-center">
            <p className="text-xl  font-bold">DeviceTypeText</p>
            <p>Device Type: {viewPort}</p>
         </div>
      );
   }
}

export default withScreenSizeDetectors(DeviceTypeText);
