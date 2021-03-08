import tripleStep from "../triple-step";

test("should return `1` if `stairsCount` is `1`", () => {
  expect(tripleStep(1)).toBe(1);
});

test("should return `2` if `stairsCount` is `2`", () => {
  expect(tripleStep(2)).toBe(2);
});

test("should return `4` if `stairsCount` is `3`", () => {
  expect(tripleStep(3)).toBe(4);
});

test("should return the sum of the possible ways of the previous three  if `stairsCount` is greater than `3`", () => {
  expect(tripleStep(4)).toBe(tripleStep(3) + tripleStep(2) + tripleStep(1));
  expect(tripleStep(5)).toBe(tripleStep(4) + tripleStep(3) + tripleStep(2));
  expect(tripleStep(6)).toBe(tripleStep(5) + tripleStep(4) + tripleStep(3));
  expect(tripleStep(7)).toBe(tripleStep(6) + tripleStep(5) + tripleStep(4));
});
