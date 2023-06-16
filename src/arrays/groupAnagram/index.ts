export const groupAnagrams = (strs: string[]): string[][] => {
  const hash = new Map<string, string[]>();

  for (let [index, word] of strs.entries()) {
    const sortedWord = Array.from(word).sort().toString();

    if (hash.has(sortedWord)) {
      hash.get(sortedWord)?.push(word);
    } else {
      hash.set(sortedWord, [word])
    }
  }

  return Array.from(hash.values());
};