const partial = (func, ...xs) => (...args) => func(...xs, ...args);

module.exports = partial;
