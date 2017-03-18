function busOfHell(stp) {
	var sum = 0;
	for (var i = 0;i<stp.length;i++) {
		sum = sum + stp[i][0];
		sum = sum - stp[i][1];
	}	
	return sum;
}