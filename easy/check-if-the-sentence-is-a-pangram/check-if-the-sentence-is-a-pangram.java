class Solution {
  public boolean checkIfPangram(String sentence) {
      HashMap<Character, Boolean> letters = new HashMap<>();
      for(int i = 0; i < sentence.length(); i++) {
          if(letters.get(sentence.charAt(i)) == null) {
              letters.put(sentence.charAt(i), true);
          }
      }
      return letters.size() == 26;
  }
}