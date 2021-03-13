import backspaceStringCompare from "../backspace-string-compare.js";

let S = "";
let T = "";
let expectedResult;
test("should return true when two strings are equal", () => {
  S = "";
  T = "";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "";
  T = "#";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "##";
  T = "";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "ab#c";
  T = "ad#c";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "abc#d";
  T = "abzz##d";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "ab##";
  T = "c#d#";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "a##c";
  T = "#a#c";
  expectedResult = true;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);
});

test("should return false when two strings are NOT equal", () => {
  S = "a#c";
  T = "b";
  expectedResult = false;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "b##c";
  T = "b";
  expectedResult = false;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "ad#b";
  T = "b";
  expectedResult = false;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "a#c#";
  T = "b";
  expectedResult = false;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);

  S = "b";
  T = "a#c#";
  expectedResult = false;
  expect(backspaceStringCompare(S, T)).toStrictEqual(expectedResult);
});
