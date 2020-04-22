import React from "react";
import { observer } from "mobx-react";

import TodoModel from "../../../stores/Models/TodoModel";
import { action, observable } from "mobx";

type TodoProps = {
    todo: TodoModel;
    removeTodo: () => void;
};

@observer
class Todo extends React.Component<TodoProps> {
    @observable isCompleted: boolean;

    constructor(props) {
        super(props);
        this.isCompleted = props.todo.isCompleted;
    }

    updateTodoContent = (event) => {
        const { updateTodoTitle } = this.props.todo;
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            updateTodoTitle(event.target.value);
            event.target.blur();
        }
    };
    @action
    handleCheck = () => {
        const { toggleIsChecked } = this.props.todo;
        this.isCompleted = !this.isCompleted;
        toggleIsChecked();
    };
    render() {
        const { title, id } = this.props.todo;
        const { removeTodo } = this.props;
        const { isCompleted } = this;
        return (
            <li
                className="todo-item
                +"
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
