/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let mag = {};
  for(let letter = 0; letter < magazine.length; letter++) {
      mag[magazine[letter]] = mag[magazine[letter]] === undefined ? 1 : mag[magazine[letter]] + 1;
  }
  for (let letter = 0; letter < ransomNote.length; letter++) {
      if (mag[ransomNote[letter]] === undefined || mag[ransomNote[letter]] < 1) {
          return false;
      }
      mag[ransomNote[letter]]--;
  }
  return true;
};