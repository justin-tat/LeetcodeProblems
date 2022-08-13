var lengthOfLastWord = function(s) {
  //     let count = 0;
  //     let encounteredWord = false;
  //     for(let i = s.length - 1; i >= 0; i--) {
  //         if (s[i] !== " ") {
  //             encounteredWord = true;
  //         }
  //         if (encounteredWord) {
  //             count++;
  //         }
  //         if( (s[i] === " " || i === 0) && encounteredWord ) {
  //             return count;
  //         }
          
  //     }
      let words = s.split(" ");
      //console.log("/" + words[words.length - 1] + "/");
      for(let i = words.length - 1; i >= 0; i-- ) {
          if (words[i] !== "") {
              return words[i].length;
          }
      }
  };