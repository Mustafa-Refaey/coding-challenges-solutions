import longestSubstringWithoutRepeatingCharacters from "../longest-substring-without-repeating-characters";
let s = "";
test("should return the length of the longest unique string", () => {
  let expectedMaxArea;

  s = "abcabcbb";
  expectedMaxArea = 3;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedMaxArea
  );

  s = "bbbbb";
  expectedMaxArea = 1;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedMaxArea
  );

  s = "pwwkew";
  expectedMaxArea = 3;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedMaxArea
  );

  s = "";
  expectedMaxArea = 0;
  expect(longestSubstringWithoutRepeatingCharacters(s)).toStrictEqual(
    expectedMaxArea
  );
});
