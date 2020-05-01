import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken, clearUserSession } from "../../../utils/StorageUtils";

class AuthStore {
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    authAPIService;

    constructor(AuthService) {
        this.authAPIService = AuthService;
        this.init();
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        response.map((token) => setAccessToken(token));
    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error;
    }

    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status;
    }

    @action.bound
    init() {
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
    }
    userSignIn = ({}, onSuccess, onFailure) => {
        const userSignInPromise = this.authAPIService.signInAPI();

        return bindPromiseWithOnSuccess(userSignInPromise)
            .to(this.setGetUserSignInAPIStatus, (response) => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch((error) => {
                this.setGetUserSignInAPIError(error);
                onFailure(error);
            });
    };

    userSignOut = () => {
        clearUserSession();
    };

    @action.bound
    clearStore() {
        this.init();
    }
}
export { AuthStore };
