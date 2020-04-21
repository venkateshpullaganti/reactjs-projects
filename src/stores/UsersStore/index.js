import { observable, action } from "mobx";

import { API_INITIAL } from "@ib/api-constants";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class UsersStore {
    @observable getUsersAPIStatus;
    @observable getUsersAPIError;
    @observable users;
    userService;

    constructor(userService) {
        this.userService = userService;
        this.init();
    }
    @action.bound
    setUsersAPIResponse(users) {
        this.users = users;
    }

    @action.bound
    setUsersAPIError(error) {
        this.getUsersAPIError = error;
    }
    @action.bound
    setUsersAPIStatus(apiStatus) {
        this.getUsersAPIStatus = apiStatus;
    }

    @action.bound
    getUsersAPI() {
        const usersPromise = this.userService.getUsersAPI(); //Method => 4

        // const api = create({
        //     baseURL: "https://jsonplaceholder.typicode.com/",
        // });
        // const usersPromise = networkCallWithApisauce(                //Method => 2, 3
        //     api,
        //     "users/",
        //     {},
        //     apiMethods.get
        // );

        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersAPIStatus, this.setUsersAPIResponse)
            .catch(this.setUsersAPIError);

        // await fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then(this.setUsersAPIResponse)                  //Metod => 1
        //     .catch(this.setUsersAPIError);
    }

    @action
    init() {
        this.getUsersAPIStatus = API_INITIAL;
        this.getUsersAPIError = null;
        this.users = [];
    }
    @action
    clearStore() {
        this.init();
    }
}
export default UsersStore;
