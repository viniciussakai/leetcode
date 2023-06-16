import { expect, test, describe } from 'vitest';

import { isAnagram } from './index';

describe('isAnagram', () => {
  test('should return true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('should return false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('should return true', () => {
    expect(isAnagram('aacc', 'ccac')).toBe(false);
  });

  test('should return false', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });
});
