const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	let sum = 0
	for (var i = 0; i < blogs.length; i++) {
		sum += blogs[i].likes
	}
	return sum
}
