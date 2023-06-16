import { expect, test, describe } from 'vitest';

import { containsDuplicate } from './index';

describe('containsDuplicate', () => {
  test('should return true', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('should return false', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('should return true', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});

