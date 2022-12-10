func checkIfPangram(sentence string) bool {
	letters := make(map[string]bool)
	for i := 0; i < len(sentence); i++ {
			//First value returned is the value associated with key (not needed) while the second return value indicates whether the key was assigned a value or not (value will be 0 in both the case that the key was not present and if the entry was present, but with a falsy value)
			//Use slices as accessing individual indices gets bytes, not characters.
			//Alternative way is to convert bytes to strings by using String constructor

			_, isPresent := letters[sentence[ i : i + 1]]
			//_, isPresent := letters[string(sentence[i])]
			if isPresent == false {
					letters[sentence[i : i + 1]] = true
					//letters[string(sentence[i])] = true
			}
	}
	return len(letters) == 26;
}