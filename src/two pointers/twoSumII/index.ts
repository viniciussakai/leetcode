function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  let sum = 0;

  while (left < right) {
    const leftNumber = numbers[left]
    const rightNumber = numbers[right]

    sum = leftNumber + rightNumber;


    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1]
};