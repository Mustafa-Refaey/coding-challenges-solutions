/**
 * From: https://leetcode.com/problems/container-with-most-water/
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container,
 * such that the container contains the most water.
 * Notice that you may not slant the container.
 *
 * @param {number[]} heights
 * @return {number}
 */
function containerWithMostWater(heights) {
  if (heights.length <= 1) {
    return 0;
  }

  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;
  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;

    maxArea = Math.max(area, maxArea);

    if (heights[p1] > heights[p2]) {
      --p2;
    } else {
      ++p1;
    }
  }

  return maxArea;
}

module.exports = containerWithMostWater;
