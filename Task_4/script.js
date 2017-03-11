function ss(num) {
	var sum = 0;
	var step = 1;
	for (var i = 1;i<num+1;i++) {
		sum = sum + 1 / step;
		step += 3;
	}
	return sum.toFixed(2);
}