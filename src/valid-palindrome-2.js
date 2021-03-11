/**
 * From: https://leetcode.com/problems/valid-palindrome-ii/
 *
 * Given a non-empty string s, you may delete at most one character.
 * Judge whether you can make it a palindrome.
 *
 * @param {string} s
 * @param {number} allowedCharsToDelete
 * @return {boolean}
 */
function validPalindrome2(s, allowedCharsToDelete = 1) {
  if (s.length <= 1) {
    return true;
  }

  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    let leftChar, rightChar;
    // set left character
    leftChar = s[left].toLowerCase();
    if (!isAlphaNumeric(leftChar)) {
      while (!isAlphaNumeric(leftChar) && left < right - 1) {
        ++left;
        leftChar = s[left].toLowerCase();
      }
    }

    // set right character
    rightChar = s[right].toLowerCase();
    if (!isAlphaNumeric(rightChar)) {
      while (!isAlphaNumeric(rightChar) && right > left + 1) {
        --right;
        rightChar = s[right].toLowerCase();
      }
    }

    if (leftChar !== rightChar) {
      // handle edge case when the remaining is the middle on one side,
      // and the other side has a non aplha-numeric character
      if (
        left == right - 1 &&
        (!isAlphaNumeric(leftChar) || !isAlphaNumeric(rightChar))
      ) {
        return true;
      }

      if (allowedCharsToDelete > 0) {
        --allowedCharsToDelete;
        const restOfStringWithoutLeftChar = s.substring(left + 1, right + 1);
        const restOfStringWithoutRightChar = s.substring(left, right);

        return (
          validPalindrome2(restOfStringWithoutLeftChar, allowedCharsToDelete) ||
          validPalindrome2(restOfStringWithoutRightChar, allowedCharsToDelete)
        );
      }

      return false;
    }
  }

  return true;
}

function isAlphaNumeric(str) {
  let code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

export default validPalindrome2;
