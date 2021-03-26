import { expect, test } from "@jest/globals";
import { emptyObj } from "./default_prototype_chain.js";

/*
 *  emptyObj Tests
 */
test("emptyObj has ownProperty function is on prototype ", () => {
    expect(Object.getPrototypeOf(emptyObj)).toStrictEqual(Object.prototype);
    expect(emptyObj.getPrototypeOf).toBe(Object.prototype.getPrototypeOf);
});
