# Initial assumptions

This is an O(n<sup>2</sup>) problem, since we need sum up every single number in the array with the current one in loop. Is it any way to optmize this?

## Implementing an 0(n) time and O(n) space solution

Yes, there is. If we add each number in a hash table, we will be able to check if the potential match number is in this table with O(1) time complexity. See solution 2 for this approach.

## Implementing an O(nlog(n)) time and O(1) space solution

It is possible to optimize the algorithm execution by sorting the input array:

```javascript
array.sort((a, b) => a - b)
```

And creating an index at the beginning and other at the tail of the array. So, we compare this sum with the target sum.

If the current sum is bigger than the target sum, the second operand must be smaller, so we carry the right index to the next smaller number.

If the current sum is smaller than the target sum, the first operand must be bigger, so we carry the right index to the next bigger number.