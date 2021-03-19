import { expect, test } from "@jest/globals";
import { userOne, userTwo, userThree, userFour } from "./object-creation.js";

// UserOne tests
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

// UserTwo tests
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

// UserThree tests
test("userThree has correct values assigned to properties", () => {
    expect(userThree.name).toBe("Hannah");
    expect(userThree.score).toBe(18);
});

test("userThree increment to be a function", () => {
    expect(typeof userThree.increment).toBe("function");
});

test("method on increment to increase the value by one", () => {
    let preIncrementScore = userThree.score;
    userThree.increment();
    expect(userThree.score - preIncrementScore).toBe(1);
});

// UserFour tests
test("userFour has correct values assigned to properties", () => {
    expect(userFour.name).toBe("John");
    expect(userFour.score).toBe(5);
});

test("userFour increment to be a function", () => {
    expect(typeof userFour.increment).toBe("function");
});

test("method on increment to increase the value by one", () => {
    let preIncrementScore = userFour.score;
    userFour.increment();
    expect(userFour.score - preIncrementScore).toBe(1);
});
