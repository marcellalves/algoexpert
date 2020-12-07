# Initial assumptions

This is an O(n<sup>2</sup>) problem, since we need sum up every single number in the array with the current one in loop. Is it any way to optmize this?

## Implementing an 0(n) time and O(n) space solution

Yes, there is. If we add each number in a hash table, we will be able to check if the potential match number is in this table with O(1) time complexity. See solution 2 for this approach.