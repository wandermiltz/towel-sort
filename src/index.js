module.exports = function towelSort(matrix) {

	let resultArr = []

	if (matrix) {

		let arr = []

		for (let i = 0; i < matrix.length; i++) {

			if (i % 2 != 0) {
				arr.push(matrix[i].reverse())
			} else {
				arr.push(matrix[i])
			}
		}

		resultArr = arr.flat()
	}
	return resultArr
}
