import { expect, test } from "@jest/globals";
import { userOne, userTwo, userFunctions } from "./prototype-use.js";

/*
 *  userOne Tests
 */
test("userOne has correct values assigned to properties", () => {
    expect(userOne.name).toBe("Gareth");
    expect(userOne.score).toBe(10);
});

test("userOne increment to be a function", () => {
    expect(typeof userOne.increment).toBe("function");
});

test("method on increment to increase the value by one", () => {
    let preIncrementScore = userOne.score;
    userOne.increment();
    expect(userOne.score - preIncrementScore).toBe(1);
});

test("method login returns expected string", () => {
    const expected = "Gareth, you are logged in!";
    expect(userOne.login()).toBe(expected);
});

test("__proto__ returns userFunctionStore as prototype", () => {
    expect(userOne.__proto__).toBe(userFunctions);
});
test("Object.getPrototype returns userFunctionStore as prototype", () => {
    expect(Object.getPrototypeOf(userOne)).toBe(userFunctions);
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
    expect(userTwo.__proto__).toBe(userFunctions);
});
test("Object.getPrototype returns userFunctionStore as prototype", () => {
    expect(Object.getPrototypeOf(userTwo)).toBe(userFunctions);
});
