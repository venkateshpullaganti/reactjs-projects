import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

function withScreenSizeDetectors(WrappedComponent) {
   @observer
   class EnhancedComponent extends React.Component {
      @observable viewPort = null;
      componentDidMount() {
         window.addEventListener("resize", this.onWindowResize);
         this.onWindowResize();
      }
      componentWillUnmount() {
         window.removeEventListener("resize", this.onWindowResize);
      }
      onWindowResize = (e) => {
         const windowWidth = window.innerWidth;
         console.log(e);
         if (windowWidth < 576) {
            this.viewPort = "Mobile";
         } else if (windowWidth >= 576 && windowWidth < 992) {
            this.viewPort = "Tablet";
         } else {
            this.viewPort = "Desktop";
         }
      };
      render() {
         return <WrappedComponent viewPort={this.viewPort} {...this.props} />;
      }
   }

   return EnhancedComponent;
}

export default withScreenSizeDetectors;
