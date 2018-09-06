const zip = (...rows) => {
    // Zip takes an arbitrary number of sequences, or arrays
    // and zips them into a single list of lists
    // zip([1,2,3], [4,5,6], [7,8,9]) => [[1,4,7], [2,5,8], [3,6,9]]

    return rows.map((_, column) => {
        // Next, map through the rows again and return a new row 
        // with the corresponding element from each column
        return rows.map(row => row[column]);
    });
};

module.exports = zip;