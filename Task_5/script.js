function forLancelot(arr) {
	var woman = 0;
	var man = 0;
	for (var i = 0;i<arr.length;i++) {
		if (arr[i] == 1) {
			man++;
		}else if (arr[i] == -1) {
			woman++;
		}
	}
	/*if (man > woman) {
		return true;
	}else {
		return false;
	}*/
	return man > woman;
}