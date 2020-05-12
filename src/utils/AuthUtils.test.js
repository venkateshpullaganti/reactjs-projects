import { isLoggedIn } from "./AuthUtils";

import { setAccessToken } from "./StorageUtils";

describe("IsLoggedIn tests", () => {
   it("should return false when no auth token.", () => {
      expect(isLoggedIn()).toBe(false);
   });
   it("should return true when there is authtoken", () => {
      setAccessToken("sample Token");
      expect(isLoggedIn()).toBe(true);
   });
});
