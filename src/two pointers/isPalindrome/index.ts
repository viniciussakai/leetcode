export const isPalindrome = (s: string): boolean => {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (str.length === 1) return true;

  const mid = Math.floor(str.length / 2);
  let left = 0;
  let right = str.length - 1;

  for (let i = 0; i < mid; i++) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};