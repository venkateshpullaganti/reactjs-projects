import React from "react";
import { observer } from "mobx-react";
import { autorun, reaction } from "mobx";


import themeStore from "../../../stores/TodoList";



@observer
class TodoFooter extends React.Component {

    onChangeCurrentFilter = (filter) => {
        themeStore.setCurrentFilter(filter);
    }
    clearCompleted = () => {
        themeStore.clearCompleted();
    }
    render() {
        return (
            <div className="extra-functions" >
                <p>Remaining Todos: {themeStore.activeTodoCount}</p>
                <button className="all-btn" type="buton" onClick={(e) => this.onChangeCurrentFilter("All", e)}>All</button>
                <button className="active-btn" type="button" onClick={(e) => this.onChangeCurrentFilter("Active", e)}>Active</button>
                <button className="completed-btn" type="button" onClick={(e) => this.onChangeCurrentFilter("Completed", e)}>Completed</button>
                <button className="cleat-completed-btn" type="button" onClick={this.clearCompleted}>Clear Completed</button>
            </div>
        );
    }
}
export default TodoFooter;


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

