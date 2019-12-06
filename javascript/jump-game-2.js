/**
 * From: https://leetcode.com/problems/jump-game-ii
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
function jumpGame2(nums) {
    // make the hash table
    const indicesJumps = buildIndicesJumps(nums);
    let jumpsCount = 0;

    let i = 0;
    while (i < nums.length - 1) {
        jumpsCount++;
        let maxIndex = -1;

        for (let x = i + 1; x <= indicesJumps[i] && x < nums.length; x++) {
            if (
                maxIndex === -1 ||
                indicesJumps[x] >= indicesJumps[maxIndex] ||
                x === nums.length - 1
            ) {
                maxIndex = x;
            }
        }

        if (maxIndex <= i) {
            // we can not reach the last index
            return -1;
        }

        i = maxIndex;
    }

    return jumpsCount;
}

/**
 * build the table of indices jumps
 * @param {number[]} nums
 * @returns {Object} {index: farest_reachable_index}
 */
function buildIndicesJumps(nums) {
    let indicesJumps = {};

    for (let i = 0; i < nums.length; i++) {
        indicesJumps[i] = i + nums[i];
    }

    return indicesJumps;
}

// function jumpGame2(nums) {
//     // make the hash table
//     let indicesJumps = {};
//     indicesJumps[nums.length - 1] = 0;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         indicesJumps[i] = lowestIndexInReach(nums, indicesJumps, i);
//     }

//     return indicesJumps[0];
// }

// /**
//  *
//  * find the lowest jumps Index can be reached
//  * except for indices with jumps of `-1`
//  *
//  * @param {number[]} nums
//  * @param {Object} indicesJumps hash table of indices and their lowest possible jumps
//  * @param {number} baseIndex
//  * @returns {number} the number of the lowest jumps,
//  *                    or `-1` in case this index can not reach the last index
//  *                    nor reach any index can reach it
//  */
// function lowestIndexInReach(nums, indicesJumps, baseIndex) {
//     const baseIndexValue = nums[baseIndex];
//     let lastReachableIndex = baseIndex + baseIndexValue;
//     if (lastReachableIndex > nums.length - 1) {
//         lastReachableIndex = nums.length - 1;
//     }

//     // in case this index can not reach the last index or any index can reach it
//     let lowestJumps = -1;

//     for (
//         let currentIndex = lastReachableIndex;
//         currentIndex <= lastReachableIndex &&
//         currentIndex >= baseIndex + 1 &&
//         currentIndex < nums.length;
//         currentIndex--
//     ) {
//         if (indicesJumps[currentIndex] !== -1) {
//             if (lowestJumps === -1 || indicesJumps[currentIndex] < lowestJumps) {
//                 lowestJumps = indicesJumps[currentIndex];
//             }
//         }
//     }

//     if (lowestJumps !== -1) {
//         ++lowestJumps;
//     }

//     return lowestJumps;
// }

module.exports = jumpGame2;
