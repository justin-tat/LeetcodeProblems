/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let solutions = [];
  let uniqueCandidates = [...new Set(candidates)];
  backtrack(uniqueCandidates, target, [], 0, solutions, 0);
  return solutions;
};

var backtrack = (candidates, target, solution, solutionSum, allSolutions, currIndex) => {
  if (solutionSum === target) {
      allSolutions.push(solution);
      return;
  }
  for(let i = currIndex; i < candidates.length; i++) {
      if(candidates[i] + solutionSum <= target) {
          let newSol = solution.slice();
          newSol.push(candidates[i]);
          backtrack(candidates, target, newSol, solutionSum + candidates[i], allSolutions, i);
      }
  }
}