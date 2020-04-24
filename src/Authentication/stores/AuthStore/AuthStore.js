import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import {
    setAccessToken,
    clearUserSession,
    getAccessToken,
    getCookie,
} from "../../../utils/StorageUtils";

class AuthStore {
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    authAPIService;

    constructor(AuthService) {
        this.authAPIService = AuthService;
        this.init();
    }

    @action.bound
    setUserSignInAPIResponse(accessToken) {
        setAccessToken(accessToken);
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
    userSignIn = () => {
        const userSignInPromise = this.authAPIService.signInAPI();

        return bindPromiseWithOnSuccess(userSignInPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);
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
