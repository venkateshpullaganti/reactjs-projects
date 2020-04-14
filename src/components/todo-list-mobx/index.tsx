import React from "react"
import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";

type TodoItemProps = {
    id: string
    content: string
    isCompleted: boolean
    updateTodoContent: (todoId: string, newName: string) => void
    handleCheckItem: () => void
    removeTodoItem: () => void

}

@observer
class TodoItem extends React.Component<TodoItemProps> {

    @observable isCompleted: boolean = this.props.isCompleted;
    @observable content: string = this.props.content;

    updateTodoContent = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.props.updateTodoContent(this.props.id, event.target.value);
        }
    }

    render() {
        return (
            <li className="todo-item" style={{ display: "flex", height: "50px" }} >
                <input
                    className="checkbox" type="checkbox"
                    onClick={this.props.handleCheckItem} defaultChecked={this.isCompleted} />

                <input disabled={this.props.isCompleted ? true : false}
                    id={this.props.id} onKeyPress={this.updateTodoContent}
                    className={this.props.isCompleted ? "todo-name strike-through" : "todo-name"}
                    type="text" defaultValue={this.content} />
                <button
                    className="remove-btn"
                    type="button" onClick={this.props.removeTodoItem} >X</button>
            </li>
        );
    }
}

type todoObj = {
    id: string,
    content: string,
    isCompleted: boolean
}

@observer
class TodoListMobx extends React.Component {

    @observable todos: Array<todoObj> = [];
    @observable currentState: string = "All";


    isEnterKey = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.addTodoItem(event.target.value);
            event.target.value = "";
        }
    }
    @action
    addTodoItem = (content: string) => {
        let todo: todoObj = {
            id: new Date().getTime().toString(),
            content,
            isCompleted: false
        }
        this.todos.push(todo);
    }
    @action
    removeTodo = (removeid: string) => {
        this.todos = this.todos.filter((todo) =>
            todo.id !== removeid);

    }
    @action
    handleCheck = (todoId: string) => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        this.todos[index].isCompleted = !this.todos[index].isCompleted;
    }
    @action
    updateTodoContent = (todoId: string, newName: string): void => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        this.todos[index].content = newName;

    }
    renderTodos = () => {
        const outputList = this.selectedFilteredTodos;
        return outputList.map((todo) =>
            <TodoItem
                updateTodoContent={this.updateTodoContent}
                handleCheckItem={() => this.handleCheck(todo.id)}
                removeTodoItem={() => this.removeTodo(todo.id)}
                key={todo.id} id={todo.id} content={todo.content}
                isCompleted={todo.isCompleted}
            />)
    }

    @computed
    get selectedFilteredTodos(): Array<todoObj> {

        if (this.currentState === 'All')
            return this.todos;
        else if (this.currentState === "Active")
            return this.todos.filter(todo => !todo.isCompleted)
        else
            return this.todos.filter((todo) => todo.isCompleted)
    }

    @computed
    get todoLength(): number {
        return this.todos.length;
    }
    @computed
    get activeTodoCount(): number {
        let count = 0;
        this.todos.forEach(todo => {
            if (!todo.isCompleted)
                count++;
        });
        return count;
    }
    renderFooter = () => {
        if (this.todoLength > 0)
            return (
                <div className="extra-functions">
                    <p>{this.activeTodoCount}</p>
                    <button className="all-btn" onClick={() => this.renderCurrentState("All")}>All</button>
                    <button className="active-btn" type="button" onClick={() => this.renderCurrentState("Active")}>Active</button>
                    <button className="completed-btn" type="button" onClick={() => this.renderCurrentState("Completed")}>Completed</button>
                    <button className="cleat-completed-btn" type="button" onClick={this.clearCompleted}>Clear Completed</button>
                </div>
            );
        return null;
    }

    @action
    clearCompleted = (): void => {
        let updatedTodoList = this.todos;
        updatedTodoList = updatedTodoList.filter((todo) =>
            !todo.isCompleted)
        this.todos = updatedTodoList;
    }

    @action
    renderCurrentState = (state: string) => {
        this.currentState = state;
    }
    render() {
        return (
            <div className="todo-list-container">
                <div className="root-div">
                    <p className="app-name">todos</p>
                    <div className="searchBar-container">

                        <span></span>
                        <input className="add-todo-bar" type="text" onKeyPress={this.isEnterKey}></input>
                    </div>
                    <ul className="todo-items-container">{this.renderTodos()}</ul>
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}
export default TodoListMobx;



// import React from "react";
// import { observer } from "mobx-react";
// import { observable, action, computed } from "mobx";


// @observer
// class TodoApp extends React.Component {

//     @observable todos = [];
//     @observable selectedFilter = "All";


//     isEnterKey = (event) => {
//         if (event.charCode === 13 && event.target.value !== "") {
//             this.onAddTodo(event.target.value);
//             event.target.value = "";
//         }

//     }
//     @action
//     onAddTodo = (title) => {
//         let todo = {
//             id: new Date().getTime(),
//             title,
//             isCompleted: false
//         }
//         let updatedTodoList = this.todos;
//         updatedTodoList.push(todo);
//         this.todos = updatedTodoList;
//     }

//     @action
//     onRemoveTodo = (removeid) => {
//         let updatedTodoList = this.todos.filter((todo) =>
//             todo.id !== removeid);
//         this.todos = updatedTodoList;
//     }

//     @action
//     onCompletedTodo = (todoId) => {
//         let modifiedList = this.todos;
//         const index = modifiedList.findIndex((todo) => todo.id === todoId);
//         modifiedList[index].isCompleted = !modifiedList[index].isCompleted;
//         this.todos = modifiedList;

//     }
//     @action
//     onUpdateTodoTitle = (todoId, newTitle) => {

//         let modifiedList = this.todos;
//         const index = modifiedList.findIndex((todo) => todo.id === todoId);
//         modifiedList[index].title = newTitle;
//         this.todos = modifiedList;

//     }

//     @action
//     onChangeSelectedFilter = (state) => {
//         this.selectedFilter = state;
//     }

//     @action
//     onClearCompleted = () => {
//         let updatedTodoList = this.todos;
//         updatedTodoList = updatedTodoList.filter((todo) =>
//             !todo.isCompleted)
//         this.todos = updatedTodoList;
//     }
//     @computed
//     getActiveTodosCount = () => {
//         let count = 0;
//         this.todos.forEach(todo => {
//             if (!todo.isCompleted)
//                 count++;
//         });
//         return count;
//     }
//     @computed
//     getFilteredTodos = () => {
//         let outputList = this.todos;
//         if (this.selectedFilter === 'All')
//             outputList = this.todos;
//         else if (this.selectedFilter === "Active")
//             outputList = outputList.filter(todo => !todo.isCompleted)
//         else
//             outputList = this.todos.filter((todo) => todo.isCompleted)


//         return outputList.map((todo) =>
//             <TodoItem
//                 onUpdateTodoTitle={this.onUpdateTodoTitle}
//                 onCompleteTodo={this.onCompleteTodo(todo.id)}
//                 onRemoveTodo={this.onRemoveTodo(todo.id)}
//                 key={todo.id} id={todo.id} title={todo.title}
//                 isCompleted={todo.isCompleted}
//             />)
//     }


// }