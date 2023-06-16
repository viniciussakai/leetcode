export const topKFrequent = (nums: number[], k: number): number[] => {
  const hash = new Map<number, number>();

  for (let [index, num] of nums.entries()) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) as number + 1);
    } else {
      hash.set(num, 1);
    }
  }

  const sorted = Array.from(hash).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(
    (value) => value[0]
  );
};