import { expect, test } from "@jest/globals";
import {
    userOne,
    UserCreator,
    userTwo,
    ClassUserCreator,
} from "./scope-this-class.js";

/*
 *  userOne Tests 'this' tests
 */
test("userOne dot method call returns object to the left of the dot as 'this' ", () => {
    expect(userOne.returnThisOne()).toBe(userOne);
});

test("userOne nested function declared as regular function in method returns 'undefined' as this", () => {
    // THis should return Window when tested in browser
    expect(userOne.returnThisNested()).toBe(undefined);
});

test("userOne dot method call on nested arrow function returns the object to left of dot as this ", () => {
    expect(userOne.returnThisArrow()).toBe(userOne);
});

/*
 *  userTwo Tests
 */
test("userTwo has correct values assigned to properties", () => {
    expect(userTwo.name).toBe("Bob");
    expect(userTwo.score).toBe(7);
});

test("userTwo increment to be a function", () => {
    expect(typeof userTwo.increment).toBe("function");
});

test("method on increment to increase the value by one", () => {
    let preIncrementScore = userTwo.score;
    userTwo.increment();
    expect(userTwo.score - preIncrementScore).toBe(1);
});

test("method login returns expected string", () => {
    const expected = "Bob, you are logged in!";
    expect(userTwo.login()).toBe(expected);
});

test("__proto__ returns userFunctionStore as prototype", () => {
    expect(userTwo.__proto__).toBe(ClassUserCreator.prototype);
});

test("Object.getPrototype returns userFunctionStore as prototype", () => {
    expect(Object.getPrototypeOf(userTwo)).toBe(ClassUserCreator.prototype);
});
