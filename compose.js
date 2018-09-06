const double = x => x * 2;
const increment = x => x + 1;
const negate = x => -x;

const compose = (...funcs) => x => funcs.reduceRight((value, func) => func(value), x);

console.log(compose(negate, increment, double)(1));

module.exports = compose;