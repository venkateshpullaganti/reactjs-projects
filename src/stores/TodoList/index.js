import { observable, action, computed } from "mobx";
//import { observer } from "mobx-react";

import TodoModel from "../Models/TodoModel";



class TodoStore {
    @observable todos;
    @observable selectedFilter;

    constructor() {
        this.todos = [];
        this.selectedFilter = "All"
    }

    @action.bound
    addTodo(title) {
        let todoObj = {
            id: new Date().getTime(),
            title: title,
            isCompleted: false
        }
        let todoModel = new TodoModel(todoObj);
        this.todos.push(todoModel);
    }

    @action.bound
    removeTodo(removeid) {
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
        this.todos = this.todos.filter((todo) =>
            !todo.isCompleted)
    }

    @action
    setCurrentFilter = (filter) => {
        this.selectedFilter = filter;
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
}
const todoStore = new TodoStore();
export default todoStore;