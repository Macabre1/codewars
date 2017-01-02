# areArraysEqual

Arrays are stored in different locations in memory. So even two identical arrays would not deep equal each other.

Examples:

## Examples

Input | Output
------------- | -------------
[1, 2, 3], [1, 2, 3] | true
[1, 2, 3], [1, 2, 3, 4] | false
[1, 2, 3], [3, 2, 1] | false
[true, false, "yes", 1, 2], [true, false, "yes", 1, 2] | true
