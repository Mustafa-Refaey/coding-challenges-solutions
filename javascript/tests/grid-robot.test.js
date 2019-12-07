const gridRobot = require("../grid-robot");
let grid = [];
test("should return the path if the bottom right is reachable from the top left", () => {
    let expectedPath = [];

    grid = [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ];
    expectedPath = [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
        [2, 2]
    ];
    expect(gridRobot(grid)).toStrictEqual(expectedPath);

    grid = [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ];
    expectedPath = [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 2]
    ];
    expect(gridRobot(grid)).toStrictEqual(expectedPath);

    grid = [
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 1, 1]
    ];
    expectedPath = [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
        [2, 2],
        [2, 3]
    ];
    expect(gridRobot(grid)).toStrictEqual(expectedPath);
});

test("should return false if the bottom right is NOT reachable from the top left", () => {
    grid = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0]
    ];
    expect(gridRobot(grid)).toBe(false);

    grid = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(gridRobot(grid)).toBe(false);

    grid = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1]
    ];
    expect(gridRobot(grid)).toBe(false);

    grid = [
        [1, 1, 1, 1],
        [0, 1, 0, 0],
        [1, 0, 1, 1]
    ];
    expect(gridRobot(grid)).toBe(false);
});
