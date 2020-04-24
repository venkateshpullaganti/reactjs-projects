import AuthStore from "./AuthStore";

import AuthService from "../services/AuthService";

const authService = new AuthService();
const authStore = new AuthStore(authService);

export default authStore;
