import { expect, test } from "@jest/globals";

import {
    userOne,
    UserCreator,
    userFunctions,
    PaidUserCreator,
    paidUserOne,
} from "./subclassing_with_new_and_call.js";

/*
 *  userOne Tests
 */
test("userOne has correct values assigned to properties", () => {
    expect(userOne.name).toBe("John");
    expect(userOne.score).toBe(10);
});

test("method incrementScore increase the score value by one", () => {
    let preIncrementScore = userOne.score;
    userOne.incrementScore();
    expect(userOne.score - preIncrementScore).toBe(1);
});

test("method getIntroduction returns expected string", () => {
    const expected = "Hi, I'm John";
    expect(userOne.getIntroduction()).toBe(expected);
});

test("__proto__ returns UserCreator.prototype", () => {
    expect(userOne.__proto__).toBe(UserCreator.prototype);
});

test("Object.getPrototype returns userFunctionStore as prototype", () => {
    expect(Object.getPrototypeOf(userOne)).toBe(UserCreator.prototype);
});

test("userOne.constructor returns Object", () => {
    expect(userOne.constructor).toBe(UserCreator);
});

/*
 *  paidUserOne Tests
 */
test("paidUserOne has correct values assigned to properties", () => {
    expect(paidUserOne.name).toBe("Gareth");
    expect(paidUserOne.score).toBe(10);
    expect(paidUserOne.balance).toBe(100);
});

test("incrementScore method on  paidUserOne to increase the value by one", () => {
    let preIncrementScore = paidUserOne.score;
    paidUserOne.incrementScore();
    expect(paidUserOne.score - preIncrementScore).toBe(1);
});

test("method getIntroduction returns expected string", () => {
    const expected = "Hi, I'm Gareth";
    expect(paidUserOne.getIntroduction()).toBe(expected);
});

test("increaseBalance increases balance by passed argument amount", () => {
    let preIncreaseBalance = paidUserOne.balance;
    let amount = 10;
    paidUserOne.increaseBalance(amount);
    expect(paidUserOne.balance - preIncreaseBalance).toBe(amount);
});
