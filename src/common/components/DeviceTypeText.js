import React, { Component } from 'react'
import withScreenSizeDetectors from '../hocs/withScreenSizeDetectors'
class DeviceTypeText extends Component {
   render() {
      const { isDesktop, isMobile, isTablet } = this.props

      return (
         <div className='p-4 bg-gray-300 text-center'>
            <p className='text-xl  font-bold'>DeviceTypeText</p>
            <p>
               Device Type:{' '}
               {isDesktop
                  ? 'Desktop'
                  : isTablet
                  ? 'Tablet'
                  : isMobile
                  ? 'Mobile'
                  : null}
            </p>
         </div>
      )
   }
}

export default withScreenSizeDetectors(DeviceTypeText)
