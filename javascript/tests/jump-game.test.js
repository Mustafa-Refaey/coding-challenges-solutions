const jumpGame = require("../jump-game");

test("should return true if the last index is reachable", () => {
    expect(jumpGame([2, 3, 1, 1, 4])).toBe(true);
    expect(jumpGame([2, 3, 0, 1, 0])).toBe(true);
    expect(jumpGame([3, 0, 0, 1, 1])).toBe(true);
    expect(jumpGame([2, 4, 0, 0, 4])).toBe(true);
});

test("should return false if the last index is not reachable", () => {
    expect(jumpGame([3, 2, 1, 0, 4])).toBe(false);
    expect(jumpGame([0, 2, 1, 1, 4])).toBe(false);
    expect(jumpGame([1, 0, 1, 2, 4])).toBe(false);
    expect(jumpGame([2, 1, 0, 4, 4])).toBe(false);
});
