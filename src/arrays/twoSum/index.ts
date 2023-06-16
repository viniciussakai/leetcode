export const twoSum = (nums: number[], target: number): number[] => {
  const hash = new Map<number, number>();

  for (let [index, num] of nums.entries()) {
    let complement = target - num;

    if (hash.has(complement) && hash.size > 0) {
      return [hash.get(complement) as number, index]
    }

    hash.set(num, index);
  }

  return [-1, -1];
};