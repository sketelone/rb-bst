# Binary Search Tree

Creates a class for a binary search tree implemented in Javascript using recursion. Unit-testing done with Jest.

Binary search trees are tree data structures comprised of nodes, each of which have value, left child and right child properties. BST's are sorted such that the value of the left child of a given node is always less than the value of that node, and the value of the right child is always greater.

# Methods
root() - function which returns the root node <br />
insert(value) - inserts a new node with the given value <br />
remove(value) - removes a new node with the given value <br />
find(value) - finds the value and returns the node <br />
levelOrder() - traverses tree in level order (visit all nodes on a given level before descending), returns array of values <br />
preorder() - traverses tree in level order (Root, Left, Right), returns array of values <br />
inorder() - traverses tree in level order (Left, Root, Right), returns array of values <br />
postorder() - traverses tree in level order (Left, Right, Root), returns array of values <br />
height(node) - returns height (longest distance to leaf) of the given node, or root if no input is given <br />
depth(node) - returns depth (distance to root) of the given node, or root if no input is given <br />
isBalanced() - checks if the tree is balanced <br />
rebalance() - rebalances the tree <br />
prettyPrint() - prints a diagram of the binary tree in the console <br />
