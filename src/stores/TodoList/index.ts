import { observable, action, computed, reaction } from "mobx";


import TodoModel from "../Models/TodoModel";

type todoModelType = {
    id: string,
    title: string,
    isCompleted: boolean
}

class TodoStore {
    @observable todos: Array<todoModelType>;
    @observable selectedFilter: string;

    constructor() {
        this.todos = [];
        this.selectedFilter = "All";
    }

    @action.bound
    addTodo(title: string) {
        let todoObj = {
            id: new Date().getTime().toString(),
            title: title,
            isCompleted: false
        }
        let todoModel = new TodoModel(todoObj);
        this.todos.push(todoModel);
    }

    @action.bound
    removeTodo(removeid: string) {
        this.todos = this.todos.filter((todo) =>
            todo.id !== removeid);
    }

    @computed
    get selectedFilteredTodos() {

        if (this.selectedFilter === 'All')
            return this.todos;
        else if (this.selectedFilter === "Active")
            return this.todos.filter(todo => !todo.isCompleted)
        else
            return this.todos.filter((todo) => todo.isCompleted)
    }

    @action
    clearCompleted = () => {
        this.todos = this.todos.filter((todo) => !todo.isCompleted)
    }

    @action
    setCurrentFilter = (filter: string) => {
        this.selectedFilter = filter;
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

    customReaction = reaction(
        () => this.todos.map(todo => todo.title),
        (todonames) => {
        }
    )
}
const todoStore = new TodoStore();
export default todoStore;