import React from "react";
import { observer } from "mobx-react";
// import { observable, action, computed, reaction } from "mobx";

// import { ThemeStore } from "../../stores/ThemeStore";
import todoStore from "../../stores/TodoList";
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";
import { NetworkFailed, Msg, Retry } from "./styledComponent";
import { observable } from "mobx";

@observer
class TodoListMobxV2 extends React.Component {
    @observable isLoading: boolean;
    @observable networkStatus: string;
    @observable todos;

    constructor(props) {
        super(props);
        this.isLoading = true;
        this.networkStatus = "success";
    }
    addTodoItem = (title: string): void => {
        todoStore.addTodo(title);
    };

    componentDidMount() {
        this.getTodoList();
    }
    async getTodoList() {
        // this.networkStatus = "success";
        try {
            const url = "https://todo-list-5.getsandbox.com/todos";
            const response = await fetch(url);
            if (response.ok) {
                this.todos = await response.json();
                this.isLoading = false;
                this.updateTodosInStore();
            } else {
                throw response;
            }
        } catch (error) {
            this.networkStatus = error;
        }
    }
    updateTodosInStore = () => {
        todoStore.updateTodoList(this.todos);
    };
    isEnterKey = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            todoStore.setCurrentFilter("All");
            this.addTodoItem(event.target.value);
            event.target.value = "";
        }
    };

    removeTodo = (removeid: string) => {
        todoStore.removeTodo(removeid);
    };

    renderTodos = () => {
        const outputList = todoStore.selectedFilteredTodos;
        if (outputList !== null) {
            return outputList.map((eachTodoModel) => (
                <Todo
                    todo={eachTodoModel}
                    key={Math.random()}
                    removeTodo={() => this.removeTodo(eachTodoModel.id)}
                />
            ));
        }
        return null;
    };

    renderFooter = () => {
        if (todoStore.todoLength > 0) return <TodoFooter />;
        return null;
    };
    renderOnNetworkStatus = () => {
        if (this.networkStatus !== "success") {
            return (
                <NetworkFailed>
                    <Msg>Network Error</Msg>
                    <Retry>Retry</Retry>
                </NetworkFailed>
            );
        } else if (this.isLoading) {
            return <div>Loading...</div>;
        } else
            return (
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
            );
    };

    render() {
        return (
            <div className="todo-list-container">
                {this.renderOnNetworkStatus()}
            </div>
        );
    }
}

export default TodoListMobxV2;

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
//         let updatedTodoList = todoStore.todos;
//         updatedTodoList.push(todo);
//         todoStore.todos = updatedTodoList;
//     }

//     @action
//     onRemoveTodo = (removeid) => {
//         let updatedTodoList = todoStore.todos.filter((todo) =>
//             todo.id !== removeid);
//         todoStore.todos = updatedTodoList;
//     }

//     @action
//     onCompletedTodo = (todoId) => {
//         let modifiedList = todoStore.todos;
//         const index = modifiedList.findIndex((todo) => todo.id === todoId);
//         modifiedList[index].isCompleted = !modifiedList[index].isCompleted;
//         todoStore.todos = modifiedList;

//     }
//     @action
//     onUpdateTodoTitle = (todoId, newTitle) => {

//         let modifiedList = todoStore.todos;
//         const index = modifiedList.findIndex((todo) => todo.id === todoId);
//         modifiedList[index].title = newTitle;
//         todoStore.todos = modifiedList;

//     }

//     @action
//     onChangeSelectedFilter = (state) => {
//         this.selectedFilter = state;
//     }

//     @action
//     onClearCompleted = () => {
//         let updatedTodoList = todoStore.todos;
//         updatedTodoList = updatedTodoList.filter((todo) =>
//             !todo.isCompleted)
//         todoStore.todos = updatedTodoList;
//     }
//     @computed
//     getActiveTodosCount = () => {
//         let count = 0;
//         todoStore.todos.forEach(todo => {
//             if (!todo.isCompleted)
//                 count++;
//         });
//         return count;
//     }
//     @computed
//     getFilteredTodos = () => {
//         let outputList = todoStore.todos;
//         if (this.selectedFilter === 'All')
//             outputList = todoStore.todos;
//         else if (this.selectedFilter === "Active")
//             outputList = outputList.filter(todo => !todo.isCompleted)
//         else
//             outputList = todoStore.todos.filter((todo) => todo.isCompleted)

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
