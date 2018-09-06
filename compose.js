const compose = (...funcs) => x => funcs.reduceRight((value, func) => func(value), x);

export default compose;