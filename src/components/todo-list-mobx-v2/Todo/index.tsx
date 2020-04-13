import React from "react";
import { observer } from "mobx-react";




@observer
class Todo extends React.Component {


    updateTodoContent = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.props.todo.updateTodoTitle(event.target.value);

        }
    }
    handleCheck = () => {
        this.props.todo.toggleIsChecked();
    }
    render() {
        const { isCompleted, title, id } = this.props.todo;
        const { removeTodo } = this.props;
        return (
            <li className="todo-item" style={{ display: "flex", height: "50px" }} >
                <input
                    className="checkbox" type="checkbox"
                    onClick={this.handleCheck} defaultChecked={isCompleted} />

                <input disabled={isCompleted ? true : false}
                    id={id} onKeyPress={this.updateTodoContent}
                    className={isCompleted ? "todo-name strike-through" : "todo-name"}
                    type="text" defaultValue={title} />
                <button
                    className="remove-btn"
                    type="button" onClick={removeTodo} >X</button>
            </li>
        );
    }
}

export default Todo;
