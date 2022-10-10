/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let counter = 0;
  let tCounter = 0;
  while(counter !== s.length && tCounter !== t.length) {
      if(s[counter] === t[tCounter]) {
          counter++;
      }
      tCounter++;
  }
  if(counter === s.length) {
      return true;
  } else {
      return false;
  }
  
};