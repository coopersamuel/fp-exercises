const flips = func => {
    return (...args) => {
        return func(...args.reverse());
    };
};

module.exports = flips;
