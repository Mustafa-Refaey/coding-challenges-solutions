/**
 * From: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
 *
 * Max profit: An array `A` consisting of `N` integers is given.
 * It contains daily prices of a stock share for a period of N consecutive days.
 * If a single share was bought on day `P` and sold on day `Q`, where `0` ≤ `P` ≤ `Q` < `N`,
 * then the profit of such transaction is equal to `A[Q]` − `A[P]`, provided that `A[Q]` ≥ `A[P]`.
 * Otherwise, the transaction brings loss of `A[P]` − `A[Q]`.
 *
 * Write a function that, given an array `A` consisting of `N` integers containing
 * daily prices of a stock share for a period of `N` consecutive days,
 * returns the maximum possible profit from one transaction during this period.
 * The function should return `0` if it was impossible to gain any profit.
 *
 * @param {number[]} dailyPrices
 * @return {number}
 */
function maxProfit(dailyPrices) {
  if (dailyPrices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let buyPrice = dailyPrices[0];

  for (let i = 1; i < dailyPrices.length; i++) {
    if (dailyPrices[i] < buyPrice) {
      buyPrice = dailyPrices[i];
    } else if (dailyPrices[i] > buyPrice) {
      if (dailyPrices[i] - buyPrice > maxProfit) {
        maxProfit = dailyPrices[i] - buyPrice;
      }
    }
  }

  return maxProfit;
}

export default maxProfit;
