import { observable, action, computed } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";

import TodoModel from "../Models/TodoModel";

type todoModelType = {
    id: string;
    title: string;
    isCompleted: boolean;
};

class TodoStoreAPI {
    @observable todos!: Array<TodoModel>;
    @observable selectedFilter!: string;
    todoService;
    @observable getTodosAPIStatus!: number;
    @observable getTodosAPIError!: string;

    constructor(todoService) {
        this.todoService = todoService;
        this.init();
    }
    @action
    setGetTodosAPIStatus = (status) => {
        this.getTodosAPIStatus = status;
    };

    @action setGetTodosApiError = (error) => {
        this.getTodosAPIError = error;
    };
    @action setTodosApiResponse = (data) => {
        this.todos = data.map((todo) => {
            let todoObj = {
                id: todo.id,
                title: todo.title,
                isCompleted: todo.completed,
            };

            return new TodoModel(todoObj);
        });
    };

    getTodos = () => {
        const todoPropmise = this.todoService.getTodos();
        return bindPromiseWithOnSuccess(todoPropmise)
            .to(this.setGetTodosAPIStatus, this.setTodosApiResponse)
            .catch(this.setGetTodosApiError);
    };

    init = () => {
        this.todos = [];
        this.selectedFilter = "All";
        this.getTodosAPIStatus = API_INITIAL;
        this.getTodosAPIError = "";
    };
    @action.bound
    updateTodoList(todoList) {
        this.todos = todoList.map((todo) => {
            const todoObj = {
                id: todo.id,
                title: todo.title,
                isCompleted: todo.completed,
            };
            return new TodoModel(todoObj);
        });
    }

    @action.bound
    addTodo(title: string): void {
        let todoObj = {
            id: new Date().getTime().toString(),
            title: title,
            isCompleted: false,
        };
        let todoModel = new TodoModel(todoObj);
        this.todos.push(todoModel);
    }

    @action.bound
    removeTodo(removeid: string): void {
        this.todos = this.todos.filter((todo) => todo.id !== removeid);
    }

    @computed
    get selectedFilteredTodos(): Array<TodoModel> {
        if (this.selectedFilter === "All") return this.todos;
        else if (this.selectedFilter === "Active")
            return this.todos.filter((todo) => !todo.isCompleted);
        else return this.todos.filter((todo) => todo.isCompleted);
    }

    @action
    clearCompleted = (): void => {
        this.todos = this.todos.filter((todo) => !todo.isCompleted);
    };

    @action
    setCurrentFilter = (filter: string): void => {
        this.selectedFilter = filter;
    };

    @computed
    get todoLength(): number {
        return this.todos.length;
    }

    @computed
    get activeTodoCount(): number {
        let count = 0;
        this.todos.forEach((todo) => {
            if (!todo.isCompleted) count++;
        });
        return count;
    }

    // customReaction = reaction(
    //     () => this.todos.map(todo => todo.title),
    //     (todonames) => { }
    // )
}

export default TodoStoreAPI;
