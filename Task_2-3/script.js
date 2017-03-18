function invertNum(arr) {
	var out = [];
	for (var i = 0;i<arr.length;i++) {
		out.push(arr[i] - arr[i] * 2);
	}
	return out;
}