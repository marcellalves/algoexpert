# Initial thoughts with pencil and paper

We can only calculate the equation after iterate through the main and inner arrays. Each array will be computed calling the recursive function.

## Steps to solve the problem

1 - Write a recursive function that receives an array and a depth  
2 - Iterate through the array  
3 - If the current value is a number:   
```javascript
return value + func(next, depth)
```
4 - If the current value is an array:  
```javascript
return depth * (func(next, depth + 1))
```
