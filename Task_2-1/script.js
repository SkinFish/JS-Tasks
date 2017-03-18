function avr(arr) {
	var sum = 0;
	var out = 0;
	for (var i = 0;i<arr.length;i++) {
		sum = sum + arr[i];
	}
	out = sum / arr.length;
	return out;
}