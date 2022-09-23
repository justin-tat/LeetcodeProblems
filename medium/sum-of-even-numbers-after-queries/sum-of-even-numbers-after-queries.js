/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
  let sum = 0;
  let arr = [];
  //Get current sum as starting point
  for(let j = 0; j < nums.length; j++) {
      if(nums[j] % 2 == 0) sum += nums[j];
  }
  //Iterate through queries
  for(let i = 0; i < queries.length; i++) {

      //Checks if both numbers are even or odd
      if(Math.abs(queries[i][0]) % 2 == Math.abs(nums[queries[i][1]] % 2)) {
        //Since both result in an even number in nums, then you have to add the query amount no matter what
        sum += queries[i][0];
        //If both numbers are odd, then you are changing nums[queries[i][1]] to an even number, so you have to add it to sum
        if(Math.abs(queries[i][0]) % 2 == 1) sum += nums[queries[i][1]];
      } else {
          //If the numbers are different, then you will end up with an odd number. If the numbers are different and the number was odd, you don't have to do anything since the sum won't change. If the number was even and is getting changed to an odd, then you have to subtract the number from your running sum since it won't be counted any more
          if(Math.abs(queries[i][0]) % 2 == 1 && Math.abs(nums[queries[i][1]]) % 2 == 0) {
              sum -= nums[queries[i][1]];
          }
      }
      
      
      nums[queries[i][1]] += queries[i][0];
      arr.push(sum);
  }
  return arr;
};