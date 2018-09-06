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
clist(1, 2, 3);
// => [1, 2, 3]
```

### add

Takes an arbitrary number of arguments and adds them together.

```
add(1, 2, 3);
// => 6
```

### sub

Takes an arbitrary number of arguments and subtracts them from the first argument. Also works as negate in the case that only one argument is given.

```
sub(3, 2);
// => 1

sub(3);
// => -3
```

### compose

Takes an arbitrary number of functions and performs function composition. Each function passed to `compose` must be unary - only accepting one argument.

```
// Declare some unary functions
const double = x => x * 2;
const increment = x => x + 1;
const negate = x => -x;

compose(negate, increment, double)(1);
// => -3

compose(double, increment, negate)(1);
// => 0
```

`compose` applies the functions from right to left, as is convention. As the example shows, the order of the functions matters. f(g(x)) != g(f(x))

### zip

Takes an arbitrary number of sequences and zips them into a single list of lists.

```
zip([1,2,3], [4,5,6], [7,8,9]);
// => [[1,4,7], [2,5,8], [3,6,9]]
```
### zipmap

Takes two sequences and zips them into a single object (key-value pairs).

```
zipmap(['first', 'second', 'third'], [1,2,3]));
// => { 'first': 1, 'second': 2, 'third': 3 }
```

### partial

Takes a function `func` and an arbitrary number of arguments and returns a new function that is `func` partially applied to those arguments.

```
partial(add, 1, 2)(3, 4) 
// => 10

partial(clist, 1, 2)(3, 4) 
// => [1, 2, 3, 4]

partial(sub, 10)(1, 2) 
// => 7
```