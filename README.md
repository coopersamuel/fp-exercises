# fp-tools

A collection of functional programming utilities.

## Usage

```
const func = require('./func.js');
func(arg);
```

### clist

Short for create list, clist, takes an arbitrary number of arguments and returns a list.

```
console.log(clist(1, 2, 3));
// => [1, 2, 3]
```

### add

Takes an arbitrary number of arguments and adds them together.

```
console.log(add(1, 2, 3));
// => 6
```

### sub

Takes an arbitrary number of arguments and subtracts them from the first argument. Also works as negate in the case that only one argument is given.

```
console.log(sub(3, 2));
// => 1

console.log(sub(3));
// => -3
```
