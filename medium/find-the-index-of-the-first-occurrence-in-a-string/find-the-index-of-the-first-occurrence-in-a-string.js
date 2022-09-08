/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if(haystack === needle) return 0;
  for(let i = 0; i <= haystack.length - needle.length; i++) {
      let found = false;
      let curr = 0;
      while(curr < needle.length && haystack[i + curr] === needle[curr]) {
          curr++;
      }
      if (curr === needle.length) return i;
  }
  return -1;
};