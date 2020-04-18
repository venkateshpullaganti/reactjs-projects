import React from "react";
import { observer } from "mobx-react";

import TodoModel from "../../../stores/Models/TodoModel";

type TodoProps = {
    todo: TodoModel;
    removeTodo: () => void;
};

@observer
class Todo extends React.Component<TodoProps> {
    updateTodoContent = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.props.todo.updateTodoTitle(event.target.value);
        }
    };
    handleCheck = () => {
        this.props.todo.toggleIsChecked();
    };
    render() {
        const { isCompleted, title, id } = this.props.todo;
        const { removeTodo } = this.props;
        console.log();
        return (
            <li
                className="todo-item"
                style={{ display: "flex", height: "50px" }}
            >
                <input
                    className="checkbox"
                    type="checkbox"
                    onClick={this.handleCheck}
                    defaultChecked={isCompleted ? true : false}
                />

                <input
                    disabled={isCompleted}
                    id={id}
                    onKeyPress={this.updateTodoContent}
                    className={
                        isCompleted ? "todo-name strike-through" : "todo-name"
                    }
                    type="text"
                    defaultValue={title}
                />
                <button
                    className="remove-btn"
                    type="button"
                    onClick={removeTodo}
                >
                    X
                </button>
            </li>
        );
    }
}

export default Todo;
