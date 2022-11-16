class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split(" ")
        words = [word.strip() for word in words]
        result = ""
        for i in range(len(words) - 1, -1, -1):
            if(words[i] != ""):
                result += words[i] + " "
        return result[:-1]