class MonotonicArray {
  public boolean isMonotonic(int[] nums) {
      if(nums.length < 2) {
          return true;
      }
      int starting = 0;
      boolean isIncreasing = true;
      while(starting < nums.length - 1) {
          if(nums[starting] != nums[starting + 1]) {
              isIncreasing = nums[starting] < nums[starting + 1] ? true : false;
              starting++;
              break;
          }
          starting++;
      } 
      for(int i = starting; i < nums.length - 1; i++) {
          if(isIncreasing) {
              if(nums[i] > nums[i + 1]) {
                  return false;
              }
          } else {
              if(nums[i] < nums[i + 1]) {
                  return false;
              }
          }
      }
      return true;
  }
}