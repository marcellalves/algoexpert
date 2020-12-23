# First thoughts

To determine whether the second array is a subsequence, what really matters is the order of appearance of the numbers. Note that if one element is out of order, the entire sequence is invalidated.

The simplest way to start solving this problem is iterating each element in the second array and checking its existence in the first array. To optmize this, we can transform the first array into a hash table.

If the element in the second array have an index equal or greater than the index of the element at the first array, then we continue iterating. If not, we break the loop and return false.

If false is not returned, so the second array is a subsequence of the first and we return true.

The above solution solves the problem with O(n) time and O(n) space complexity.

## First implementation fail

The approach to use a hash table has failed several tests, so I rewrite to use an array-based, O(n) time and O(1) space solution with the following logic:

Iterate through every element in the main array and compare with the element in the current index of the sequence array, starting with 0.

If the value of two arrays is equal, so I add 1 to the sequence array index. If I get to the end of the sequence array, it means every value in it is contained in the main array, in the same order, so the function returns true. If I not reach the end of the sequence array, so there is no sequence. This solution passes all tests of AlgoExpert platform.