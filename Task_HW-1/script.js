function isFriend(friends, people) {
	var out = [];
	for (var i = 0;i < people.length;i++) {
		for (var v = 0;v < people.length;v++) {
			if (people[i] == friends[v]) {
				out.push(people[i]);
			}
		}
	}
	return out;
}