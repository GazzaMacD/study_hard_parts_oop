import { expect, test } from "@jest/globals";
import {
    userOne,
    UserCreator,
    userFunctions,
} from "./subclassing_factory_function.js";

/*
 *  userOne Tests
 */
test("userOne has correct values assigned to properties", () => {
    expect(userOne.name).toBe("John");
    expect(userOne.score).toBe(10);
});

test("method on increment to increase the value by one", () => {
    let preIncrementScore = userOne.score;
    userOne.incrementScore();
    expect(userOne.score - preIncrementScore).toBe(1);
});

test("method login returns expected string", () => {
    const expected = "Hi, I'm John";
    expect(userOne.getIntroduction()).toBe(expected);
});

test("__proto__ returns userFunctions", () => {
    expect(userOne.__proto__).toBe(userFunctions);
});

test("Object.getPrototype returns userFunctionStore as prototype", () => {
    expect(Object.getPrototypeOf(userOne)).toBe(userFunctions);
});

test("userOne.constructor returns Object", () => {
    expect(userOne.constructor).toBe(Object);
});
