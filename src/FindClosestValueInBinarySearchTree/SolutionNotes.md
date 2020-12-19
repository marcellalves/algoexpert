# Initial thoughts

Iterate through the BST considering its rule: if the target value is greater than the value in the current node, go to the right node. If it is less, go to the left node. Test if the left child of the current node is greater or equal the target number, or if it's null. If this conditions apply, then the current node value is the closest value.