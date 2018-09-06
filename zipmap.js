const zipmap = (keysArray, valuesArray) => {
    // Zipmap takes an two sequences, or arrays
    // and zips them into a single object
    // zipmap(['first', 'second', 'third'], [1,2,3]) 
    //    ==> { 'first': 1, 'second': 2, 'third': 3 }

    let zipped = {};

    keysArray.forEach((key, index) => {
        zipped[key] = valuesArray[index];
    });

    return zipped;
};

export default zipmap;