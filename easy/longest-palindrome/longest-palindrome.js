/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let occurrences = {};
  //add up all numbers with even occurrences, then add all odd occurrences - 1 if less than the highest odd occurrence, highest odd occurrence if that letter occurred the most number of odd times. 
  let maxOdd = 0;
  let currCount = 0;
  let oddKey = "";
  for(let i = 0; i < s.length; i++) {
      if(occurrences[s[i]] === undefined) {
          occurrences[s[i]] = 1;
      } else {
          occurrences[s[i]] = occurrences[s[i]] + 1;
      }
  }
  for(const key in occurrences) {
      if(occurrences[key] % 2 === 1 && occurrences[key] > maxOdd) {
          maxOdd = occurrences[key];
          oddKey = key;
      }
  }
  for(const key in occurrences) {
      if(occurrences[key] % 2 === 0) {
          currCount += occurrences[key];
      } else {
          
          currCount += key === oddKey ? occurrences[key] : occurrences[key] - 1;
      }
  }
  return currCount;
};