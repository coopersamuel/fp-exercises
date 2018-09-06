const take = (n, seq) => {
    return seq.filter((_, index) => {
        if (index < n) {
            // When using filter, return true to keep the element, false otherwise
            return true;
        }
    });
};

module.exports = take;