import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: props.isCompleted,
            content: props.content,
        };
    }

    updateTodoContent = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.props.updateTodoContentFunc(this.props.id, event.target.value);
        }
    };

    render() {
        return (
            <li
                className="todo-item"
                style={{ display: "flex", height: "50px" }}
            >
                <input
                    className="checkbox"
                    type="checkbox"
                    onClick={this.props.handleCheckItem}
                    defaultChecked={this.state.isCompleted}
                />

                <input
                    disabled={this.props.isCompleted ? true : false}
                    id={this.props.id}
                    onKeyPress={this.updateTodoContent}
                    className={
                        this.props.isCompleted
                            ? "todo-name strike-through"
                            : "todo-name"
                    }
                    type="text"
                    defaultValue={this.state.content}
                />
                <button
                    className="remove-btn"
                    type="button"
                    onClick={this.props.removeTodoItem}
                >
                    X
                </button>
            </li>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            currentState: "All`",
        };
    }
    isEnterKey = (event) => {
        if (event.charCode === 13 && event.target.value !== "") {
            this.addTodoItem(event.target.value);
            event.target.value = "";
        }
    };
    addTodoItem = (content) => {
        let todo = {
            id: new Date().getTime(),
            content,
            isCompleted: false,
        };
        let updatedTodoList = this.state.todoList;
        updatedTodoList.push(todo);
        this.setState({ todoList: updatedTodoList });
    };
    removeTodo = (removeid) => {
        let updatedTodoList = this.state.todoList.filter(
            (todo) => todo.id !== removeid
        );
        this.setState({ todoList: updatedTodoList });
    };
    handleCheck = (todoId) => {
        let modifiedList = this.state.todoList;
        const index = modifiedList.findIndex((todo) => todo.id === todoId);
        modifiedList[index].isCompleted = !modifiedList[index].isCompleted;
        this.setState({ todoList: modifiedList });
    };
    updateTodoContent = (todoId, newName) => {
        let modifiedList = this.state.todoList;
        const index = modifiedList.findIndex((todo) => todo.id === todoId);
        modifiedList[index].content = newName;
        this.setState({ todoList: modifiedList });
    };
    renderTodos = () => {
        let outputList = this.state.todoList;
        if (this.state.currentState === "All") outputList = this.state.todoList;
        else if (this.state.currentState === "Active")
            outputList = outputList.filter((todo) => !todo.isCompleted);
        else
            outputList = this.state.todoList.filter((todo) => todo.isCompleted);

        return outputList.map((todo) => (
            <TodoItem
                updateTodoContentFunc={this.updateTodoContent}
                handleCheckItem={() => this.handleCheck(todo.id)}
                removeTodoItem={() => this.removeTodo(todo.id)}
                key={todo.id}
                id={todo.id}
                content={todo.content}
                isCompleted={todo.isCompleted}
            />
        ));
    };
    renderFooter = () => {
        if (this.state.todoList.length > 0)
            return (
                <div className="extra-functions">
                    <button
                        className="all-btn"
                        type="buton"
                        onClick={(e) => this.renderCurrentState("All", e)}
                    >
                        All
                    </button>
                    <button
                        className="active-btn"
                        type="button"
                        onClick={(e) => this.renderCurrentState("Active", e)}
                    >
                        Active
                    </button>
                    <button
                        className="completed-btn"
                        type="button"
                        onClick={(e) => this.renderCurrentState("Completed", e)}
                    >
                        Completed
                    </button>
                    <button
                        className="cleat-completed-btn"
                        type="button"
                        onClick={this.clearCompleted}
                    >
                        Clear Completed
                    </button>
                </div>
            );
        return null;
    };

    clearCompleted = () => {
        let updatedTodoList = this.state.todoList;
        updatedTodoList = updatedTodoList.filter((todo) => !todo.isCompleted);
        this.setState({ todoList: updatedTodoList });
    };
    renderCurrentState = (state) => {
        this.setState({ currentState: state });
    };
    render() {
        return (
            <div className="todo-list-container">
                <div className="root-div">
                    <p className="app-name">todos</p>
                    <div className="searchBar-container">
                        <span></span>
                        <input
                            className="add-todo-bar"
                            type="text"
                            onKeyPress={this.isEnterKey}
                        ></input>
                    </div>
                    <ul className="todo-items-container">
                        {this.renderTodos()}
                    </ul>
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}

// ReactDOM.render(
//     <TodoList />,
//     document.getElementById("root")
// )

export { TodoList };
