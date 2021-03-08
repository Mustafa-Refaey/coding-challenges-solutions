import jumpGame2 from "../jump-game-2";

test("should return `-1` if last index is not reachable", () => {
  expect(jumpGame2([0, 1])).toBe(-1);
  expect(jumpGame2([0, 0, 1])).toBe(-1);
  expect(jumpGame2([1, 0, 1])).toBe(-1);
  expect(jumpGame2([2, 1, 0, 1])).toBe(-1);
  expect(jumpGame2([2, 1, 0, 6, 1])).toBe(-1);
  expect(jumpGame2([2, 2, 1, 0, 1, 1, 4])).toBe(-1);
});

test("should return `0` if the array only includes one number`", () => {
  expect(jumpGame2([7])).toBe(0);
});

test("should return the minimum number of jumps needed to reach the last index", () => {
  expect(jumpGame2([6, 5, 1, 8, 3, 1, 4])).toBe(1);
  expect(jumpGame2([2, 1])).toBe(1);
  expect(jumpGame2([1, 2, 1, 4])).toBe(2);
  expect(jumpGame2([2, 3, 1, 1, 4])).toBe(2);
  expect(jumpGame2([2, 4, 1, 1, 7, 4])).toBe(2);
  expect(jumpGame2([2, 5, 9, 1, 1, 1, 4])).toBe(2);
  expect(jumpGame2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0])).toBe(2);
  expect(jumpGame2([2, 2, 2, 1, 1, 1, 4])).toBe(4);
  expect(jumpGame2([2, 2, 1, 1, 1, 1, 4])).toBe(5);
});
