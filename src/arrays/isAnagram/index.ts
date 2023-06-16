
export const isAnagram = (s: string, t: string) => {
  const anagramA = countLetters(s);
  const anagramB = countLetters(t);

  if (areMapsEqual(anagramA, anagramB)) {
    return true;
  }

  return false;
}

const countLetters = (str: string): Map<string, number> => {
  const hash = new Map();

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (hash.has(letter)) {
      hash.set(letter, hash.get(letter) + 1);
    } else {
      hash.set(letter, 1);
    }
  }

  return hash;
}

const areMapsEqual = (mapA, mapB) => {
  if (mapA.size !== mapB.size) {
    return false;
  }

  for (let [key, value] of mapA) {
    if (!mapB.has(key) || mapB.get(key) !== value) {
      return false;
    }
  }

  return true;
}
