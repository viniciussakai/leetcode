export const containsDuplicate = (nums: number[]) => {
  const hash = new Map();

  for (let num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }

  for (let [num, count] of hash) {
    if (count >= 2) {
      return true;
    }
  }

  return false;
}
