/**
 * From: https://leetcode.com/problems/trapping-rain-water/
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * @param {number[]} heights
 * @return {number}
 */
function trappingRainWater(heights) {
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let waterTotalArea = 0;
  let maxLeftHeight = 0;
  let maxRightHeight = 0;
  let currentLeftHeight;
  let currentRightHeight;

  while (leftPointer < rightPointer) {
    currentLeftHeight = heights[leftPointer];
    currentRightHeight = heights[rightPointer];
    if (currentRightHeight <= currentLeftHeight) {
      if (currentRightHeight >= maxRightHeight) {
        maxRightHeight = currentRightHeight;
      } else {
        waterTotalArea += maxRightHeight - currentRightHeight;
      }
      --rightPointer;
    } else {
      if (currentLeftHeight >= maxLeftHeight) {
        maxLeftHeight = currentLeftHeight;
      } else {
        waterTotalArea += maxLeftHeight - currentLeftHeight;
      }
      ++leftPointer;
    }
  }

  return waterTotalArea;
}

module.exports = trappingRainWater;
