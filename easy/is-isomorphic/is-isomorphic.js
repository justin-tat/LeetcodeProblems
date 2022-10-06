/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  let fo = {};
  let so = {};
  let fCounter = 0;
  let sCounter = 0;
  for(let i = 0; i < s.length; i++) {
      if(fo[s[i]] === undefined) {
          fo[s[i]] = fCounter;
          fCounter++;
      }
      if(so[t[i]] === undefined) {
          so[t[i]] = sCounter;
          sCounter++;
      }
      if(fo[s[i]] !== so[t[i]]) return false;
  }
  return true;
};