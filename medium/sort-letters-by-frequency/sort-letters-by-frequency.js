

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
  let obj = {};
  let arr = [];
  for(var letter in s) {
      if (obj[s[letter]] === undefined) {
          obj[s[letter]] = 1;
      } else {
          obj[s[letter]]++;
      }
  }
  for(var letter in obj) {
      arr.push({letter: letter, count: obj[letter]});
  }
  arr.sort((a, b) => b.count - a.count);
  let string = "";
  for(let i = 0; i < arr.length; i++) {
      let current = arr[i];
      string += current.letter.repeat(current.count);
  }
  return string;
  
};