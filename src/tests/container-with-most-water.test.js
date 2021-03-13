import containerWithMostWater from "../container-with-most-water.js";
let heights = [];
test("should return the area of the biggest container", () => {
  let expectedMaxArea;

  heights = [4, 8, 1, 2, 3, 9];
  expectedMaxArea = 32;
  expect(containerWithMostWater(heights)).toStrictEqual(expectedMaxArea);

  heights = [1, 1];
  expectedMaxArea = 1;
  expect(containerWithMostWater(heights)).toStrictEqual(expectedMaxArea);

  heights = [4, 3, 2, 1, 4];
  expectedMaxArea = 16;
  expect(containerWithMostWater(heights)).toStrictEqual(expectedMaxArea);

  heights = [1, 2, 1];
  expectedMaxArea = 2;
  expect(containerWithMostWater(heights)).toStrictEqual(expectedMaxArea);
});
