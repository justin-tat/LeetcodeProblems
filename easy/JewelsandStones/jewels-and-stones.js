/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  let jewelType = {};
  for (let i of jewels) {
      if (jewelType[i] === undefined) {
          jewelType[i] = true;
      }
  }
  let count = 0;
  for (let i of stones) {
      if (jewelType[i] !== undefined) {
          count++;
      }
  }
  return count;
};