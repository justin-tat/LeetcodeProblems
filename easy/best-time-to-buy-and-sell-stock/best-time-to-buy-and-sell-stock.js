/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if(prices.length === 1) {
      return 0;
  }
  let start = 0;
  let end = 1;
  let max = 0;
  while (start < prices.length - 1) {
      while(prices[end] > prices[start] && end < prices.length) {
          if(prices[end] - prices[start] > max) max = prices[end] - prices[start];
          end++;
      }
      //You have left the while loop once you have either A reached the end with start being the minimum amount, or when yo have found a new smaller number (i.e. prices[end] < prices[start]). At this point, update start to 
      start = end;
      end = start + 1;
  }
  return max;
};