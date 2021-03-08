/**
 * From: https://leetcode.com/problems/jump-game
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function jumpGame(nums) {
  let prevJumpPos = nums.length - 1;
  for (let currPos = nums.length - 2; currPos >= 0; --currPos) {
    if (nums[currPos] >= prevJumpPos - currPos) {
      prevJumpPos = currPos;
    }
  }

  return prevJumpPos === 0;
}

export default jumpGame;
