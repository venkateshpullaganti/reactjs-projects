import React from "react";
import {
   render,
   fireEvent,
   waitFor,
   getByTestId,
   getByPlaceholderText,
   waitForElement,
   queryByRole,
   getByText,
} from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import {
   E_COMMERCE_SIGN_IN_PATH,
   E_COMMERCE_PRODUCTS_PATH,
} from "../../../constants/RouteConstants";

import AuthService from "../../../Authentication/services/AuthService";
import AuthStore from "../../stores/AuthStore";
import getUserSignInResponse from "../../../fixtures/getUserSignInResponse.json";

import { SignInRoute } from ".";
import { API_SUCCESS } from "@ib/api-constants";

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid="location-display">{location.pathname}</div>
));

describe("SignInRoute Tests", () => {
   let authAPI;
   let authStore;

   beforeEach(() => {
      authAPI = new AuthService();
      authStore = new AuthStore(authAPI);
   });
   afterEach(() => {
      jest.resetAllMocks();
   });

   it("Should render username empty error message", () => {
      const { getByText, getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      );
      const signInBtn = getByTestId("sign-in-button");
      fireEvent.click(signInBtn);
      getByText(/Please enter username/i);
   });

   it("should render password empty error message", () => {
      const username = "test-username";
      const { getByText, getByTestId, getByPlaceholderText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      );
      const usernameField = getByPlaceholderText("Username");
      const signInBtn = getByTestId("sign-in-button");

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.click(signInBtn);
      getByText(/Please enter password/i);
   });

   it("should render loading state", () => {
      const username = "test-username";
      const password = "test-password";
      const {
         getByTestId,
         getByPlaceholderText,

         getByRole,
      } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      );
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInBtn = getByTestId("sign-in-button");

      const mockLoadingPromise = new Promise(function (resolve, reject) {});
      const mockSignInApi = jest.fn();
      mockSignInApi.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInApi;

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInBtn);

      waitForElement(() => getByRole("button", { disabled: true }));
   });
   it("should render success state", async () => {
      const history = createMemoryHistory();
      const route = E_COMMERCE_SIGN_IN_PATH;
      history.push(route);

      const username = "test-username";
      const password = "test-password";

      const { getByTestId, getByPlaceholderText } = render(
         <Provider authStore={authStore}>
            <Router history={history}>
               <Route path={E_COMMERCE_SIGN_IN_PATH}>
                  <SignInRoute />
               </Route>
               <Route path={E_COMMERCE_PRODUCTS_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      );

      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getUserSignInResponse);
      });

      const mockSignInApi = jest.fn();
      mockSignInApi.mockReturnValue(mockSuccessPromise);
      authAPI.signInAPI = mockSignInApi;

      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInBtn = getByTestId("sign-in-button");

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInBtn);

      await waitFor(() => {
         expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
         expect(getByTestId("location-display")).toHaveTextContent(
            E_COMMERCE_PRODUCTS_PATH
         );
         expect(signInBtn).not.toBeInTheDocument();
      });
   });

   it("should render failure state", () => {
      const username = "test-username";
      const password = "test-password";

      const { getByTestId, getByPlaceholderText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      );
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInBtn = getByTestId("sign-in-button");

      const mockLoadingPromise = new Promise(function (resolve, reject) {
         reject(new Error("error"));
      }).catch(() => {});
      const mockSignInApi = jest.fn();
      mockSignInApi.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInApi;

      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInBtn);

      waitForElement(() => {
         getByText(/NETWORK_ERROR/i);
      });
   });
});
