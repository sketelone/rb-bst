# Binary Search Tree

Creates a class for a binary search tree implemented in Javascript using recursion. Unit-testing done with Jest.

Binary search trees are tree data structures comprised of nodes, each of which have value, left child and right child properties. BST's are sorted such that the value of the left child of a given node is always less than the value of that node, and the value of the right child is always greater.

# Methods
root() - function which returns the root node <br />
insert(value) - inserts a new node with the given value <br />
remove(value) - removes a new node with the given value <br />
find(value) - finds the value <br />
levelOrder() - returns the last node in the list <br />
preorder(index) - returns the node at the given index or false if index exceeds length of list <br />
inorder() - removes the last element from the list <br />
postorder(value) - returns true if the passed in value is in the list and otherwise returns false <br />
height(node) - returns the index of the node containing value, or false if not found <br />
depth(node) - returns linked list as a string in the format: ( value ) -> ( value ) -> ( value ) -> null <br />
isBalanced() - inserts a new node with the provided value at the given index or false if index exceeds length of list <br />
rebalance() - inserts a new node with the provided value at the given index or false if index exceeds length of list <br />
prettyPrint(index) - removes the node at the given index or false if the list is empty or if index exceeds length of list <br />


root, prettyPrint, insert, remove, find, levelOrder, preorder, inorder, postorder, height, depth, isBalanced, rebalance