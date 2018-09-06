const drop = (n, seq) => {
    return seq.filter((_, index) => {
        if (index >= n) {
            return true;
        }
    });
};

module.exports = drop;