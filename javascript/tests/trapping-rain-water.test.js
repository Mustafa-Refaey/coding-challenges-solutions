const trappingRainWater = require("../trapping-rain-water");

let heights = [];
test("should return the trapped water total area", () => {
  let expectedWaterTotalArea;

  heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  expectedWaterTotalArea = 6;
  expect(trappingRainWater(heights)).toStrictEqual(expectedWaterTotalArea);

  heights = [4, 2, 0, 3, 2, 5];
  expectedWaterTotalArea = 9;
  expect(trappingRainWater(heights)).toStrictEqual(expectedWaterTotalArea);
});
