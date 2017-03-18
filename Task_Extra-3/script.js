function isInteger(num) {
  return (num ^ 0) === num;
}
function magick(arr) {
	var out = [];
	for (var i = 0;i< arr.length;i++) {
		if (isInteger(Math.sqrt(arr[i])) == true) {
			out.push(Math.sqrt(arr[i]));
		}else {
			out.push(arr[i] * arr[i]);
		}
	}

	return out;
}