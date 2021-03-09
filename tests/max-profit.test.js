import maxProfit from "../max-profit";

test("should return `0` if `dailyPrices` array is empty", () => {
  expect(maxProfit([])).toBe(0);
});

test("should return `0` if `dailyPrices` array contains a single element", () => {
  expect(maxProfit([8])).toBe(0);
});

test("should return `0` if it was impossible to gain any profit", () => {
  expect(maxProfit([8, 6])).toBe(0);
  expect(maxProfit([8, 6, 5, 4])).toBe(0);
  expect(maxProfit([20, 16, 16, 15, 0])).toBe(0);
});

test("should return the maximum possible profit from one transaction", () => {
  expect(maxProfit([6, 8])).toBe(2);
  expect(maxProfit([8, 6, 5, 20])).toBe(15);
  expect(maxProfit([20, 16, 26, 15, 0])).toBe(10);
  expect(maxProfit([20, 16, 26, 15, 50])).toBe(35);
  expect(maxProfit([20, 15, 16, 50, 26])).toBe(35);
  expect(maxProfit([20, 15, 16, 50, 15])).toBe(35);
  expect(maxProfit([15, 20, 16, 26, 50])).toBe(35);
  expect(maxProfit([15, 20, 16, 50, 50])).toBe(35);
  expect(maxProfit([15, 20, 50, 16, 26])).toBe(35);
  expect(maxProfit([15, 15, 50, 16, 26])).toBe(35);
});
