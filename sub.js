const sub = (...args) => {
    if (args.length === 1) {
        return -args[0];
    }

    return args.reduce((difference, value) => difference - value);
};

module.exports = sub;