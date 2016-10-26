# Insertion Sort
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field.


## Examples

Input | Output
------------- | -------------
array: [ { "value": 3 }, { "value": 1 }, { "value": 2 } ]| [ { "value": 1 }, { "value": 2 }, { "value": 3 } ]
array: [ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ] | [ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]
