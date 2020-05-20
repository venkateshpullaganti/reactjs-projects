import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class MouseCoordinates extends Component {
   @observable mouse = {
      mouseX: 0,
      mouseY: 0
   }
   componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMovement)
   }
   handleMouseMovement = event => {
      this.mouse = {
         mouseX: event.clientX,
         mouseY: event.clientY
      }
   }
   render() {
      const { render } = this.props
      return (
         <div className='self-center'>
            <p>DisplayMouseCoordinates</p>
            {render(this.mouse)}
         </div>
      )
   }
}

export default MouseCoordinates
