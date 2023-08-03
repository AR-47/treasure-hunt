/**
 * function name - treaure hunt
 * @param nums: number[]
 * @returns void
 * 
 * 
 * const nums = [
    34, 21, 32, 41, 25, 14, 42, 43, 14, 31, 54, 45, 52, 42, 23, 33, 15, 51, 31,
    35, 21, 52, 33, 13, 23
];
 * create a treasureMap array containing 5 arrays of 5 numbers based on the nums variable
 * for loop running 5 times, at each loop, create an array and push 5 numbers from the nums array. At the same iteration, push that newly created array into treasureMap
 * 
 * define currentPos = {x: 1, y: 1}
 * define value = treasureMap[currentPos.x][currentPos.y].toString()
 * define nextPos = {x: value[0], y: value[1] }
 * 
 * create function comparePositions(currentPos, NextPos) {
 *  if currentPos !== nextPos 
 * console.log(visited currentPos and nextPos)
 *      update currentPos and nextPos
 *      THEN compare(currentPos, nextPos)
 *  
 *  else
 *  THEN found treasure
 * }
 */

/**
 * pos 1,1 - value is 34
 * pos 3,4 - value is 3,3
 *
 */
