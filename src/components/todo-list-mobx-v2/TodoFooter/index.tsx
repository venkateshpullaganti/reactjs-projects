import React from 'react'
import { observer } from 'mobx-react'

import themeStore from '../../../stores/TodoList'

export const AllBtn = props => (
   <button className='all-btn' onClick={props.onClick}>
      {props.displayText}
   </button>
)
export const ActiveBtn = props => (
   <button className='active-btn' onClick={props.onClick}>
      {props.displayText}
   </button>
)

export const CompletedBtn = props => (
   <button className='completed-btn' onClick={props.onClick}>
      {props.displayText}
   </button>
)

@observer
class TodoFooter extends React.Component {
   onChangeCurrentFilter = filter => {
      themeStore.setCurrentFilter(filter)
   }
   clearCompleted = () => {
      themeStore.clearCompleted()
   }
   render() {
      return (
         <div className='extra-functions'>
            <p>Remaining Todos: {themeStore.activeTodoCount}</p>
            <AllBtn
               onClick={() => this.onChangeCurrentFilter('All')}
               displayText={'ALL'}
            />

            <ActiveBtn
               onClick={() => this.onChangeCurrentFilter('Active')}
               displayText={'Active'}
            />

            <CompletedBtn
               onClick={() => this.onChangeCurrentFilter('Completed')}
               displayText={'Completes'}
            />

            <button
               className='cleat-completed-btn'
               onClick={this.clearCompleted}
            >
               Clear Completed
            </button>
         </div>
      )
   }
}
export default TodoFooter

// autorun(() => {
//     if (themeStore.activeTodoCount === 0) {
//         console.log("autorun");
//         alert("congrats you have no todos left..!");
//     }
//     else {
//         console.log("autorun else")
//     }
// }
// )

// function compl() {
//     return todoStore.todoLength === 0;
// }

// const reaction1 = reaction(
//     () => todoStore.todoLength,
//     (length) => alert("completed")
// )
