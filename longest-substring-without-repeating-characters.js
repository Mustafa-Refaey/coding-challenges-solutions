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

  let seenCharsMap = {};
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const currentChar = s[rightPointer];
    if (seenCharsMap.hasOwnProperty(currentChar)) {
      leftPointer = seenCharsMap[currentChar];
    }

    seenCharsMap[currentChar] = rightPointer;
    const currentWindowSize = rightPointer - leftPointer;
    if (currentWindowSize > longestUniqueStringLength) {
      longestUniqueStringLength = currentWindowSize;
    }
  }

  return longestUniqueStringLength;
}

export default longestSubstringWithoutRepeatingCharacters;
