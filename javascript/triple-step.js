/**
 * From the book: "Cracking The Coding Interview"
 *
 * Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
 * or 3 steps at a time.
 * Implement a method to count how many possible ways the child can run up the stairs.
 *
 * @param {number} stairsCount
 * @return {number}
 */
function tripleStep(stairsCount) {
  if (stairsCount <= 2) {
    return stairsCount;
  } else if (stairsCount === 3) {
    return 4;
  }

  let a = 1;
  let b = 2;
  let c = 4;
  let totalPossibleWays = 0;

  for (let i = 4; i <= stairsCount; i++) {
    totalPossibleWays = a + b + c;
    a = b;
    b = c;
    c = totalPossibleWays;
  }

  return totalPossibleWays;
}

export default tripleStep;
