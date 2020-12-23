# Initial thoughts

Iterate through the BST, taking advantage of the fact we know that the left number is smaller and the right number is greater or equal the current node. Store the smallest difference found between visited nodes and target. When reach a leaf node, return the node value wiht the smallest difference from the target value. 