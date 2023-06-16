import { test, expect, describe } from "vitest";

import { topKFrequent } from "./index";

describe("topKFrequent", () => {
  test("should return [1, 2]", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test("should return [1]", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("should return [1, 2]", () => {
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
  })

  test("should return [1, 2]", () => {
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
  })

  test("should return [1, 2]", () => {
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
  })

});