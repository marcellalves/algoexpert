# Initial thoughts

It's a simple problem of tree traversal. Since it requires the sum of all branches, it will be a O(n<sup>2</sup>) time complexit solution.

## First insights

  - The traversar strategy must be depth-first.
  - For each subtree, visit the left node and sum util a leaf (a node with `null` left children) is reached. Add the sum in the result array.
  - Go back through the nodes and visit the right nodes and sum until a leaf is reached. Add to the result array.
  - It'b nice to mantain a queue of visited nodes, in order to track the path back.
