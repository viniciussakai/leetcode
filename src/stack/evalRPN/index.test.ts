import { test, expect, describe } from "vitest";

import { evalRPN } from ".";

describe("evalRPN", () => {
  test("testcase 1", () => {
    const tokens = ["2", "1", "+", "3", "*"];
    expect(evalRPN(tokens)).toEqual(9);
  })

  test("testcase 2", () => {
    const tokens = ["4", "13", "5", "/", "+"];
    expect(evalRPN(tokens)).toEqual(6);
  })

  test("testcase 3", () => {
    const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
    expect(evalRPN(tokens)).toBe(22);
  })
})