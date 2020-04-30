import { add } from ".";

describe("add tests", () => {
    it("should return sum of two numbers", () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, 2)).toBe(0);
    });
    it("should add onlt two numbers", () => {
        expect(add(2, 5, 6)).toBe(add(2, 5));
    });
    it("should not add two strings", () => {
        expect(add("1", 5)).toBe(null);
    });
});
