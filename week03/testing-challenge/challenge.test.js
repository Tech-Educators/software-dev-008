import {expect, test} from "vitest"

import {
    sum,
    subtract,
    countLetters,
    divide,
    multiply,
    isAnagram,
    isPalindrome
} from "./challenge.js"

test("sum", function() {
    // what i think, as a human, i want my funciton to return
    const expected = 2;

    // what *does* my funciton return?
    const actual = sum(1,1);

    // I expect the result of sum(1,1) to be 2. 
    expect(actual).toBe(expected)
})