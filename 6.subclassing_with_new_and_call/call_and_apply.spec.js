import { expect, test } from "@jest/globals";

import { objOne, objTwo } from "./call_and_apply.js";

/*
 *  Tests
 */
test("objOne increaseBalance method increases balance as expected", () => {
    const preIncBalance = objOne.balance;
    const amount = 10;
    objOne.increaseBalance(amount);
    expect(objOne.balance).toBe(preIncBalance + amount);
});

test("objOne incrementNumUpdates method increments correctly", () => {
    expect(objOne.numUpdates).toBe(0);
    const preIncrement = objOne.numUpdates;
    objOne.incrementNumUpdates();
    expect(objOne.numUpdates).toBe(preIncrement + 1);
});

/*
 *  Tests using call
 */
test("objTwo increaseBalance method increases balance as expected with call", () => {
    objOne.balance = 0; // reset balance to 0 from previous tests
    const preIncBalance = objTwo.balance;
    const amount = 10;
    objOne.increaseBalance.call(objTwo, amount);
    expect(objOne.balance).toBe(0);
    expect(objTwo.balance).toBe(preIncBalance + amount);
});

test("objTwo incrementNumUpdates method increments correctly", () => {
    objOne.numUpdates = 0; //reset
    expect(objOne.numUpdates).toBe(0);
    expect(objTwo.numUpdates).toBe(0);
    const preIncrement = objTwo.numUpdates;
    objOne.incrementNumUpdates.call(objTwo);
    expect(objOne.numUpdates).toBe(0);
    expect(objTwo.numUpdates).toBe(preIncrement + 1);
});

/*
 *  Tests using apply
 */
test("objTwo increaseBalance method increases balance as expected with apply", () => {
    objOne.balance = 0; // reset balance to 0 from previous tests
    objTwo.balance = 0; // reset balance to 0 from previous tests
    const preIncBalance = objTwo.balance;
    const amount = 10;
    objOne.increaseBalance.apply(objTwo, [amount]);
    expect(objOne.balance).toBe(0);
    expect(objTwo.balance).toBe(preIncBalance + amount);
});

test("objTwo incrementNumUpdates method increments correctly", () => {
    objOne.numUpdates = 0; //reset
    objTwo.numUpdates = 0; //reset
    expect(objOne.numUpdates).toBe(0);
    expect(objTwo.numUpdates).toBe(0);
    const preIncrement = objTwo.numUpdates;
    objOne.incrementNumUpdates.apply(objTwo);
    expect(objOne.numUpdates).toBe(0);
    expect(objTwo.numUpdates).toBe(preIncrement + 1);
});
