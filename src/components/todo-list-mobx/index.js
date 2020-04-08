
import React from "react"
import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";


@observer
class TodoItem extends React.Component {

    @observable isCompleted = this.props.isCompleted;
    @observable content = this.props.content;

    updateTodoContent = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.props.updateTodoContentFunc(this.props.id, event.target.value);
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


@observer
class TodoListMobx extends React.Component {

    @observable todos = [];
    @observable currentState = "All";


    isEnterKey = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.addTodoItem(event.target.value);
            event.target.value = "";
        }

    }
    @action
    addTodoItem = (content) => {
        let todo = {
            id: new Date().getTime(),
            content,
            isCompleted: false
        }
        this.todos.push(todo);
    }
    @action
    removeTodo = (removeid) => {
        this.todos = this.todos.filter((todo) =>
            todo.id !== removeid);

    }
    @action
    handleCheck = (todoId) => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        this.todos[index].isCompleted = !this.todos[index].isCompleted;
    }
    @action
    updateTodoContent = (todoId, newName) => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        this.todos[index].content = newName;

    }
    renderTodos = () => {
        const outputList = this.selectedFilteredTodos;
        return outputList.map((todo) =>
            <TodoItem
                updateTodoContentFunc={this.updateTodoContent}
                handleCheckItem={() => this.handleCheck(todo.id)}
                removeTodoItem={() => this.removeTodo(todo.id)}
                key={todo.id} id={todo.id} content={todo.content}
                isCompleted={todo.isCompleted}
            />)
    }

    @computed
    get selectedFilteredTodos() {

        if (this.currentState === 'All')
            return this.todos;
        else if (this.currentState === "Active")
            return this.todos.filter(todo => !todo.isCompleted)
        else
            return this.todos.filter((todo) => todo.isCompleted)
    }

    @computed
    get todoLength() {
        return this.todos.length;
    }
    @computed
    get activeTodoCount() {
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
                    <button className="all-btn" type="buton" onClick={(e) => this.renderCurrentState("All", e)}>All</button>
                    <button className="active-btn" type="button" onClick={(e) => this.renderCurrentState("Active", e)}>Active</button>
                    <button className="completed-btn" type="button" onClick={(e) => this.renderCurrentState("Completed", e)}>Completed</button>
                    <button className="cleat-completed-btn" type="button" onClick={this.clearCompleted}>Clear Completed</button>
                </div>
            );
        return null;
    }

    @action
    clearCompleted = () => {
        let updatedTodoList = this.todos;
        updatedTodoList = updatedTodoList.filter((todo) =>
            !todo.isCompleted)
        this.todos = updatedTodoList;
    }

    @action
    renderCurrentState = (state) => {
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