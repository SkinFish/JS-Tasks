function range(start,end) {
	var out = [];
	for (var i = start;i<end+1;i++) {
		out.push(i);
	}
	return out;
}
function sum(arr) {
	var out = 0;
	for (var i = 0;i < arr.length;i++) {
		out = out + arr[i];
	}
	return out;
}