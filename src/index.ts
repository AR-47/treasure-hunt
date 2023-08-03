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
 * define path = []
 * define currentPos = {x: 1, y: 1}
 * define value = treasureMap[currentPos.x - 1][currentPos.y - 1].toString()
 * define nextPos = {x: value[0], y: value[1] }
 * 
 * create function comparePositions(currentPos, NextPos) {
 *  add currentPos to path
 *  if currentPos !== nextPos 
 *      update currentPos and nextPos
 *      
 *          
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

const nums = [
  34, 21, 32, 41, 25, 14, 42, 43, 14, 31, 54, 45, 52, 42, 23, 33, 15, 51, 31,
  35, 21, 52, 33, 13, 23,
];

interface Position {
  x: number;
  y: number;
}

function treasureHunt(nums: number[]): Position[] {
  const treasureMap: number[][] = [];
  for (let i = 0; i < 25; i += 5) {
    const row: number[] = [];
    for (let j = 0; j < 5; j++) {
      row.push(nums[i + j]);
    }
    treasureMap.push(row);
  }

  const path: Position[] = [];
  const currentPos = { x: 1, y: 1 };
  const value = treasureMap[currentPos.x - 1][currentPos.y - 1].toString();
  const currentValAsPos = { x: value[0], y: value[1] };
  
  console.log(currentPos);
  comparePositions(currentPos, currentValAsPos)

  function comparePositions(
    currentPos: { x: number; y: number },
    currentValAsPos: { x: string; y: string },
  ): void {
    console.log(currentPos);
    path.push(currentPos);
    console.log(path)
    if (
      currentPos.x.toString() !== currentValAsPos.x &&
      currentPos.y.toString() !== currentValAsPos.y
    ) {
      currentPos.x = parseInt(currentValAsPos.x);
      currentPos.y = parseInt(currentValAsPos.y);
      const value = treasureMap[currentPos.x - 1][currentPos.y - 1].toString();
      currentValAsPos.x = value[0];
      currentValAsPos.x = value[1];
      comparePositions(currentPos, currentValAsPos);
    } else {
      return;
    }
  }


  return path;
}

console.log(treasureHunt(nums));
