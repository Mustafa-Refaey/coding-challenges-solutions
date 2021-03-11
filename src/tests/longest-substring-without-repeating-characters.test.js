import longestSubstringWithoutRepeatingCharacters from "../longest-substring-without-repeating-characters";
let s = "";
test("should return the length of the longest unique string", () => {
  let expectedLongestUniqueStringLength;

  s = "abcabcbb";
  expectedLongestUniqueStringLength = 3;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );

  s = "abba";
  expectedLongestUniqueStringLength = 2;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );

  s = "au";
  expectedLongestUniqueStringLength = 2;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );

  s = "bbbbb";
  expectedLongestUniqueStringLength = 1;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );

  s = "pwwkew";
  expectedLongestUniqueStringLength = 3;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );

  s = "";
  expectedLongestUniqueStringLength = 0;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedLongestUniqueStringLength
  );
});
