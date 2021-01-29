# Initial thoughts

A binary search is a search where we divide the searchable numbers by 2 in every iteration.  
To achieve this in a search in an array, we can calculate the middle with the following formula:
```javascript
middle = Math.round(array.length / 2)
```
So, we check the value at the middle index.  
If target < pivot, search the sub array at left.  
If target > pivot, search the sub array at right .  
If target = pivot, return pivot's index.
If the array lenght is 1 and target != pivot, return -1.

Expected time complexity: O(log(n))  
Expected space complexity: O(1)