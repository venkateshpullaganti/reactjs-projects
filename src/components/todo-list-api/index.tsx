import React from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { v4 as uuidv4 } from "uuid";

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";

import Todo from "./Todo";
import TodoFooter from "./TodoFooter";

interface todoProps {}

interface injectedProps extends todoProps {
    todoStoreAPI: any;
}

@inject("todoStoreAPI")
@observer
class TodoListAPI extends React.Component<todoProps> {
    @observable todos;
    // constructor(props) {
    //     super(props);
    // }
    get injected() {
        return this.props as injectedProps;
    }

    getTodoStore = () => {
        return this.injected.todoStoreAPI;
    };

    addTodoItem = (title: string): void => {
        this.getTodoStore().addTodo(title);
    };

    componentDidMount() {
        this.doNetworkCalls();
    }
    doNetworkCalls = () => {
        this.getTodoStore().getTodos();
    };

    isEnterKey = (event) => {
        if (event.charCode === 13 && event.target.value.trim() !== "") {
            this.getTodoStore().setCurrentFilter("All");
            this.addTodoItem(event.target.value);
            event.target.value = "";
        }
    };

    removeTodo = (removeid: string) => {
        this.getTodoStore().removeTodo(removeid);
    };

    renderTodos = () => {
        const outputList = this.getTodoStore().selectedFilteredTodos;

        if (outputList !== null) {
            return outputList.map((eachTodoModel) => (
                <Todo
                    todo={eachTodoModel}
                    key={uuidv4()}
                    removeTodo={() => this.removeTodo(eachTodoModel.id)}
                />
            ));
        }
        return null;
    };

    renderFooter = () => {
        const {
            setCurrentFilter,
            clearCompleted,
            activeTodoCount,
        } = this.getTodoStore();

        if (this.getTodoStore().todoLength > 0)
            return (
                <TodoFooter
                    setCurrentFilter={setCurrentFilter}
                    clearCompleted={clearCompleted}
                    activeTodoCount={activeTodoCount}
                />
            );
        return null;
    };
    renderSuccessUi = observer(() => {
        return (
            <div className="root-div ">
                <p className="app-name">todos</p>
                <div className="searchBar-container">
                    <input
                        className="add-todo-bar"
                        type="text"
                        onKeyPress={this.isEnterKey}
                    ></input>
                </div>

                {this.getTodoStore().todoLength === 0 ? (
                    <NoDataView />
                ) : (
                    <ul className="todo-items-container">
                        {this.renderTodos()}
                    </ul>
                )}
                {this.renderFooter()}
            </div>
        );
    });

    render() {
        const { getTodosAPIStatus, getTodosAPIError } = this.getTodoStore();

        return (
            <LoadingWrapperWithFailure
                apiStatus={getTodosAPIStatus}
                apiError={getTodosAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderSuccessUi}
            />
        );
    }
}

export default TodoListAPI;
