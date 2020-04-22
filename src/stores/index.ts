import UserService from "../services/UserService/index.fixture";

import UserStore from "./UsersStore";

const userService = new UserService();

const userStore = new UserStore(userService);

export default {
    userStore,
};
