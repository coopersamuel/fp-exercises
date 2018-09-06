const add = (...args) => {
    return args.reduce((sum, value) => sum + value, 0);
};

module.exports = add;