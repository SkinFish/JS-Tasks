function removeExMa(string) {
	var strArr = string.split("");
	for (var i = 0;i < strArr.length;i++) {
		if (strArr[i] == "!") {
			strArr.splice(i,1);
		}
	}
	var out = strArr.join();
	return out;
}