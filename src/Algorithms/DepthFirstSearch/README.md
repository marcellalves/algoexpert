# Depth-first Search

You're given a `Node` class that has a `name` and an array of optional `children` nodes. When put together, nodes form an acyclic structure.

Implement the `depthFirstSearch` method on the `Node` class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically vaigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

## Sample Input

```javascript
graph =       A
            / | \
           B  C  D
          / \   / \
         E  F  G   H
           / \  \
          I  J   K
```

## Sample Output

```javascript
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
```