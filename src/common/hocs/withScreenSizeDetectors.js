import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

function withScreenSizeDetectors(WrappedComponent) {
   @observer
   class EnhancedComponent extends React.Component {
      @observable windowWidth

      componentDidMount() {
         window.addEventListener('resize', this.onWindowResize)
         this.onWindowResize()
      }

      componentWillUnmount() {
         window.removeEventListener('resize', this.onWindowResize)
      }

      onWindowResize = () => {
         this.windowWidth = window.innerWidth
      }
      @computed
      get isDesktop() {
         return this.windowWidth >= 992
      }
      @computed
      get isMobile() {
         return this.windowWidth < 576
      }
      @computed
      get isTablet() {
         return this.windowWidth >= 576 && this.windowWidth < 992
      }

      render() {
         return (
            <WrappedComponent
               isDesktop={this.isDesktop}
               isMobile={this.isMobile}
               isTablet={this.isTablet}
               {...this.props}
            />
         )
      }
   }

   return EnhancedComponent
}

export default withScreenSizeDetectors

// if (windowWidth < 576) {
//    this.viewPort = 'Mobile'
// } else if (windowWidth >= 576 && windowWidth < 992) {
//    this.viewPort = 'Tablet'
// } else {
//    this.viewPort = 'Desktop'
// }
