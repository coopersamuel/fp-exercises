const partial = (func, ...xs) => (...args) => func(...xs, ...args);

export default partial;
