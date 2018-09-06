const flip = func => {
    return (first, second, ...args) => {
        return func(second, first, ...args);
    };
};

module.exports = flip;
