import { describe, expect, test } from 'vitest'

import { twoSum } from './index'

describe('twoSum', () => {
  test('should return [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  });

  test('should return [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  });

  test('should return [0, 1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  });
});