import validPalindrome2 from "../valid-palindrome-2";

let s = "";
let expectedResult;
test("should return true when a string is a palindrome", () => {
  s = "aba";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "AbBa";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "AbvBa";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "_c_A,c,aC";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "abca";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "A man, a plan,s a canal: Panama";
  expectedResult = true;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);
});

test("should return false when a string is NOT a palindrome", () => {
  s = "raczsae a car";
  expectedResult = false;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "AbvxxcBa";
  expectedResult = false;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "cxAxaCcv";
  expectedResult = false;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);

  s = "076P";
  expectedResult = false;
  expect(validPalindrome2(s)).toStrictEqual(expectedResult);
});
