import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

function withToggle(WrappedComponent) {
   @observer
   class EnhancedComponent extends React.Component {
      @observable toggleStatus = false

      onToggle = () => {
         this.toggleStatus = !this.toggleStatus
      }
      render() {
         const { toggleStatus } = this

         return (
            <WrappedComponent
               toggleStatus={toggleStatus}
               onToggle={this.onToggle}
               {...this.props}
            />
         )
      }
   }

   return EnhancedComponent
}
export default withToggle
