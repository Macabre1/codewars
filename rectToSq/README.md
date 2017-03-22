# Rectangle to Squares

A given "true" rectangle can be cut into squares ("true" rectangle meaning that the two dimensions are different).

You will be given two dimensions

1. a positive integer length (parameter named lng)

2. a positive integer width (parameter named wdth)

You will return an array with the size of each of the squares.

Return null if you are not given a true rectangle.


## Examples
Input | Output
------------- | -------------
sqInRect(5, 5) | null
sqInRect(5, 3) | [3, 2, 1, 1]
sqInRect(3, 5) | [3, 2, 1, 1]
