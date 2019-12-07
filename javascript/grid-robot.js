/**
 * From the book: "Cracking The Coding Interview"
 *
 * Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns
 * The robot can only move in two directions, right and down, but certain cells are "off limits" such that
 * the robot cannot step on them.
 * Design an algorithm to find a path for the robot from the top left to the bottom right.
 */

/**
 * @param {number[][]} grid
 * @returns {number[][] | boolean }
 */
function gridRobot(grid) {
    const rowsCount = grid.length;
    const columnsCount = grid[0].length;
    const topLeftValue = grid[0][0];
    const bottomRightValue = grid[rowsCount - 1][columnsCount - 1];
    const topLeft = [0, 0];
    const bottomRight = [rowsCount - 1, columnsCount - 1];

    if (topLeftValue === 0 || bottomRightValue === 0) {
        return false;
    }

    return pathToTopLeft(grid, bottomRight);
}

/**
 * @param {number[][]} grid
 * @param {number[]} currentCell
 * @returns {number[][] | boolean }
 */
function pathToTopLeft(grid, currentCell) {
    const currentRow = currentCell[0];
    const currentColumn = currentCell[1];
    // if it reached topLeft
    if (currentRow === 0 && currentColumn === 0) {
        return [[0, 0]];
    }

    // if current cell's value is `0`
    if (grid[currentRow][currentColumn] === 0) {
        return false;
    }

    if (currentRow > 0) {
        const topPath = pathToTopLeft(grid, [currentRow - 1, currentColumn]);
        if (topPath !== false) {
            return [...topPath, currentCell];
        }
    }

    if (currentColumn > 0) {
        const leftPath = pathToTopLeft(grid, [currentRow, currentColumn - 1]);
        if (leftPath !== false) {
            return [...leftPath, currentCell];
        }
    }

    return false;
}

module.exports = gridRobot;
