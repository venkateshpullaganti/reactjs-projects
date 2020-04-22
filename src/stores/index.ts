import UserService from "../services/UserService/index.fixture";
import TodoService from "../services/todo-list/index.api";

import UserStore from "./UsersStore";
import TodoStoreAPI from "./TodoAPIStore";

const userService = new UserService();
const todoService = new TodoService();

const userStore = new UserStore(userService);
const todoStoreAPI = new TodoStoreAPI(todoService);

export default {
    userStore,
    todoStoreAPI,
};
