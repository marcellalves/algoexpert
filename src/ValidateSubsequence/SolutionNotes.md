# First thoughts

To determine whether the second array is a subsequence, what really matters is the order of appearance of the numbers. Note that if one element is out of order, the entire sequence is invalidated.

The simplest way to start solving this problem is iterating each element in the second array and checking its existence in the first array. To optmize this, we can transform the first array into a hash table.

If the element in the second array have an index equal or greater than the index of the element at the first array, then we continue iterating. If not, we break the loop and return false.

If false is not returned, so the second array is a subsequence of the first and we return true.

The above solution solves the problem with O(n) time and O(n) space complexity.