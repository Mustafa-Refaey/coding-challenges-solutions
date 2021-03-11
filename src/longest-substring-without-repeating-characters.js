/**
 * From: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacters(s) {
  let longestUniqueStringLength = 0;

  if (s.length <= 1) {
    return s.length;
  }

  let seenCharsMap = new Map();
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const currentChar = s[rightPointer];
    const lastSeen = seenCharsMap.get(currentChar);
    if (lastSeen !== undefined && lastSeen >= leftPointer) {
      leftPointer = lastSeen + 1;
    }

    seenCharsMap.set(currentChar, rightPointer);
    const currentWindowSize = rightPointer + 1 - leftPointer;
    if (currentWindowSize > longestUniqueStringLength) {
      longestUniqueStringLength = currentWindowSize;
    }
  }

  return longestUniqueStringLength;
}

export default longestSubstringWithoutRepeatingCharacters;
