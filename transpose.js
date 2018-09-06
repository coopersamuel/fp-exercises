const transpose = (matrix) => {
    // Transpose takes a matrix (an array of arrays) and flips it 
    // across it's diagonal
    // [[1,2,3], [4,5,6]] => [[1,4], [2,5], [3,6]]

    // Find the shortest row (this handles the case of an invalid input matrix)
    const shortestRow = matrix.reduce((shortest, value) => {
        if (value.length < shortest.length) {
            return value;
        } else {
            return shortest;
        }
    });

    return shortestRow.map((_, column) => {
        return matrix.map(row => row[column]);
    });
};

module.exports = transpose;