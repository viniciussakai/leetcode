import { test, expect, describe } from "vitest";

import { MinStack } from ".";

const useMinStack = (instructions, values) => {
  const minStack = new MinStack();

  const result: any[] = [];

  instructions.forEach((instruction, index) => {
    if (instruction !== "MinStack") {
      result.push(minStack[instruction](values[index][0]));
    } else {
      result.push(null);
    }
  })

  return result
}


describe("MinStack", () => {
  test("testcase 1", () => {
    const instructions = ["MinStack", "push", "push", "push", "push", "getMin", "pop", "getMin", "pop", "getMin", "pop", "getMin"]
    const values = [[], [2], [0], [3], [0], [], [], [], [], [], [], []]
    const expectResult = [null, null, null, null, null, 0, null, 0, null, 0, null, 2]

    expect(useMinStack(instructions, values)).toEqual(expectResult);
  });

  test("testcase 2", () => {
    const instructions = ["MinStack", "push", "push", "push", "getMin", "pop", "getMin"]
    const values = [[], [0], [1], [0], [], [], []]
    const expectResult = [null, null, null, null, 0, null, 0]

    expect(useMinStack(instructions, values)).toEqual(expectResult);
  });

  test("testcase 3", () => {
    const instructions = ["MinStack", "push", "push", "push", "getMin", "pop", "getMin"]
    const values = [[], [0], [1], [0], [], [], []]
    const expectResult = [null, null, null, null, 0, null, 0]

    expect(useMinStack(instructions, values)).toEqual(expectResult);
  });
});

