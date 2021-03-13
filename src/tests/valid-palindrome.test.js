import validPalindrome from "../valid-palindrome.js";

let s = "";
let expectedResult;
test("should return true when a string is a palindrome", () => {
  s = "Abba";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "AbBa";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "AbvBa";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "_c_A,,aC";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "cAaC";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "A man, a plan, a canal: Panama";
  expectedResult = true;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);
});

test("should return false when a string is NOT a palindrome", () => {
  s = "race a car";
  expectedResult = false;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "AbvcBa";
  expectedResult = false;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "cxAxaC";
  expectedResult = false;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);

  s = "0P";
  expectedResult = false;
  expect(validPalindrome(s)).toStrictEqual(expectedResult);
});
