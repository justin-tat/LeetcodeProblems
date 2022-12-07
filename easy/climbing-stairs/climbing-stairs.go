func climbStairs(n int) int {
	if n <= 2 {
			return n;
	}
	arr := []int {1, 2}
	for i := 2; i< n; i++ {
			arr = append(arr, arr[i - 1] + arr[i - 2])
	}
	return arr[len(arr) - 1]
}