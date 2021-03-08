/**
 * From: https://leetcode.com/problems/backspace-string-compare/
 *
 * Given two strings `S` and `T`, return if they are equal when both are typed into empty text editors.
 * `#` means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceStringCompare(S, T) {
  if (S === T) {
    return true;
  }

  let SPointer = S.length - 1;
  let TPointer = T.length - 1;

  let SCurrentChar = undefined;
  let TCurrentChar = undefined;

  let SPass = 0;
  let TPass = 0;

  while (SPointer >= 0 || TPointer >= 0) {
    // get S current char
    SPass = 0;
    do {
      SCurrentChar = S[SPointer];
      if (SCurrentChar === "#") {
        ++SPass;
      } else {
        --SPass;
      }
      --SPointer;
    } while (SPass >= 0);

    // get T current char
    TPass = 0;
    do {
      TCurrentChar = T[TPointer];
      if (TCurrentChar === "#") {
        ++TPass;
      } else {
        --TPass;
      }
      --TPointer;
    } while (TPass >= 0);

    if (SCurrentChar !== TCurrentChar) {
      return false;
    }
  }

  return true;
}

export default backspaceStringCompare;
