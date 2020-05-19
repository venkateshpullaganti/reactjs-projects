import React, { Component } from "react";

import ViewEditToggle from "../../components/ViewEditToggle";
import DeviceTypeText from "../../components/DeviceTypeText";
import CollapseExpand from "../../components/CollapseExpand";
import MouseCoordinates from "../../components/MouseCoordinates";
import DisplayMouseCoordinates from "../../components/DisplayMouseCoordinates";

class PracticeAdvancedConceptsRoute extends Component {
   render() {
      return (
         <div className="flex flex-col text-center">
            <p className="text-3xl font-bold m-2">HOCs Usage</p>
            <ViewEditToggle />
            <CollapseExpand
               list={["eggs", "milk", "cake"]}
               listTitle={"Sample Shopping List"}
            />
            <DeviceTypeText />
            <p className="text-3xl font-bold m-2">Render Props Usage</p>
            <MouseCoordinates
               render={(mouse) => (
                  <>
                     <DisplayMouseCoordinates mouse={mouse} />
                  </>
               )}
            />
         </div>
      );
   }
}

export { PracticeAdvancedConceptsRoute };
