/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  //keys are objects with keys of letters and occurrences and values are arrays of words included
  let occurrences = {};
  for(let i = 0; i < strs.length; i++) {
      let obj = strs[i].split("").sort();
      if (occurrences[obj] === undefined) {
          occurrences[obj] = [ strs[i] ];
      } else {
          occurrences[obj].push(strs[i]);
      }
  }
  
  return Object.values(occurrences);
  
};