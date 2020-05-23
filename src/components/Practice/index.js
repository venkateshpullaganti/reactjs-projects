import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import withFormatCurrency from '../../common/hocs/withFormatCurrency'

@observer
class Practice extends Component {
   @observable width = 100

   expandWidth = () => {
      this.width = 300
   }
   render() {
      return (
         <div className='flex m-4'>
            <p className='m-4'> {this.props.formattedAmount}</p>
            <button onClick={this.expandWidth}>...</button>
         </div>
      )
   }
}

export default withFormatCurrency(Practice)

new Promise((res, rej) => {
   res('success')
})
   .then(resp => {
      console.log(resp)
      return 1
   })
   .then(console.log)
