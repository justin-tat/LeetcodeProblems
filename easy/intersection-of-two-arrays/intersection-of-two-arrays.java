class Solution {
  public int[] intersection(int[] nums1, int[] nums2) {
      HashMap<Integer, Boolean> first = new HashMap<>();
      HashMap<Integer, Boolean> second = new HashMap<>();
      ArrayList<Integer> inter = new ArrayList<>();
      for(int i = 0; i < nums1.length; i++) {
          if(first.get(nums1[i]) == null) {
              first.put(nums1[i], true);
          }
      }
      for(int i = 0; i < nums2.length; i++) {
          
          if(second.get(nums2[i]) == null && first.get(nums2[i]) != null) {
              second.put(nums2[i], true);
              inter.add(nums2[i]);
          }
      }
      int[] result = new int[inter.size()];
      for(int i = 0; i < inter.size(); i++) {
          result[i] = inter.get(i);
      }
      return result;
  }
}