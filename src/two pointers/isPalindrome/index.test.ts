import { test, expect, describe } from "vitest";

import { isPalindrome } from "./index";

describe("isPalindrome", () => {
  test("should return true", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  });

  test("should return false", () => {
    expect(isPalindrome("race a car")).toEqual(false);
  });
  test("should return true", () => {
    expect(isPalindrome("  ")).toEqual(true);
  });
  test("should return true", () => {
    expect(isPalindrome("Subi no onibus")).toEqual(true);
  });
});