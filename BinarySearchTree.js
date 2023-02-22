
//create Tree class
const Tree = (array) => {
    // let TreeArray = [];
    // let TreeRoot = {};
    let TreeArray = quickSort(removeDupes(array));
    let TreeRoot = buildTree(TreeArray);

    const root = () => {
    //cleans array and calls buildTree to build array, returns root node
        // TreeArray = quickSort(removeDupes(array));
        // TreeRoot = buildTree(TreeArray);
        return TreeRoot;
    }

    const insert = (value, inputNode) => {
    //function that inserts the given value into the tree
        let node = inputNode || TreeRoot;
        if (TreeArray.includes(value)) {
            // console.log("this number is already in the tree")
            return false;
        } else if (value < node.data) {
            if (node.left == null) {
                node.left = Node(value)
            } else {
                insert(value, node.left);
            }
        } else {
            if (node.right == null) {
                node.right = Node(value)
            } else {
                insert(value, node.right);
            }
        }
        TreeArray.push(value);
        return true;    
    }

    const remove = (value, inputNode) => {
    //removes specified node from tree
        let node = inputNode || TreeRoot;
        if (!TreeArray.includes(value)) console.log("value is not in tree");
        //if node is correct node
        if (node.data == value) {
            var temp = TreeArray.filter(elem => elem !== node.data);
            TreeArray = temp;
            //if node has no children, set node to null
            if (node.right == null && node.left == null) return null
            //if node has only one child, set node to that child
            else if (node.left == null) {
                return node.right
            } else if (node.right == null) {
                return node.left
            //if node does have children, rotate tree, keep rotating until you hit no children (recurisve or while?)
            } else {
                var successorRoot = node
                var successor = node.right;
                while (successor.left !== null) {
                    successorRoot = successor;
                    successor = successor.left;
                }
                if (successorRoot !== node) successorRoot.left = successor.right;
                else successorRoot.right = successor.right;
                node.data = successor.data;
                return node;
            }
        }
        //if left node is not null, go left
        if (node.left !== null) {
            node.left = remove(value, node.left);
        }
        //if right null is not null, go right
        if (node.right !== null) {
            node.right = remove(value, node.right);
        }
        return node;
    }

    const find = (value, inputNode) => {
    //function that finds the given value and returns the node 
        let node = inputNode || TreeRoot;
        let foundNode = {};
        if (node.data == value) {
            return node;
        } else {
            if (node.left !== null) {
                foundNode = find(value, node.left);
            }
            if (Object.keys(foundNode).length === 0 && node.right !== null) {
                foundNode = find(value, node.right);
            }
        }
        if (Object.keys(foundNode).length === 0) return false;
        else return foundNode;
    }

    const levelOrder = (queue, inputNodes) => {
    //traverses tree in level order, returns array
        let nodes = inputNodes || [];
        var queue = queue || [TreeRoot];
        if (queue.length == 0) {
            return nodes;
        } else {
            nodes.push(queue[0].data);
            if (queue[0].left !== null) queue.push(queue[0].left)
            if (queue[0].right !== null) queue.push(queue[0].right)
            queue.shift();
            levelOrder(queue, nodes)
        }
        return nodes;
    } 

    const preorder = (inputNode, inputNodes) => {
    //traverses tree in root, left, right order, returns array
        let node = inputNode || TreeRoot;
        let nodes = inputNodes || [];
        nodes.push(node.data);
        if (node.left !== null) {
            preorder(node.left, nodes);
        }
        if (node.right !== null) {
            preorder(node.right, nodes);
        }
        return nodes;
    }

    const inorder = (inputNode, inputNodes) => {
    //traverses tree in left, root, right order, returns array
        let node = inputNode || TreeRoot;
        let nodes = inputNodes || [];
        if (node.left !== null) {
            inorder(node.left, nodes);
        }
        nodes.push(node.data);
        if (node.right !== null) {
            inorder(node.right, nodes);
        }
        return nodes;
    }

    const postorder = (inputNode, inputNodes) => {
        //traverses tree in left, right, root order, returns array
            let node = inputNode || TreeRoot;
            let nodes = inputNodes || [];
            if (node.left !== null) {
                postorder(node.left, nodes);
            }
            if (node.right !== null) {
                postorder(node.right, nodes);
            }
            nodes.push(node.data);
            return nodes;
    }
    
    const height = (inputNode) => {
    //returns the height of the given node
        let node = inputNode || TreeRoot;
        let lheight = 0;
        let rheight = 0;
        if (node.left == null && node.right == null) {
            return Math.max(lheight, rheight);
        } else {
            if (node.left !== null) {
                // console.log("go left")
                lheight = 1 + height(node.left);
            }
            if (node.right !== null) {
                rheight = 1 + height(node.right);
            }
        }
        return Math.max(lheight, rheight);
    }


    const depth = (inputNode) => {

    }

    const isBalanced = (inputNode) => {

    }

    const prettyPrint = (inputNode, prefix = '', isLeft = true) => {
    //prints a diagram of the binary tree in the console
        let node = inputNode || TreeRoot;
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    function buildTree(array) {
    //builds tree structure by recursively starting in the middle of the sorted 
    //array and setting adjacent elements to the right and left
        let index = Math.floor(array.length/2);
        let node = Node(array[index]);
        if (array.length == 0) {
            return null;
        } else if (array.length == 1) {
            return node;
        } else {
            var right = array.slice(index+1, array.length);
            var left = array.slice(0,index);
            node.left = buildTree(left)
            node.right = buildTree(right)
        }
        return node; 
    }
    
    function removeDupes(array) {
    //removes duplicates in the array
        let temp = [];
        while (array.length > 0) {
            if (temp.includes(array[0])) {
                array.shift();
            } else {
                temp.push(array.shift())
            }
        }
        return temp;
    }

    function quickSort(array) {
    //sorts the array by recursively selecting a random pivot element, 
    //splitting the array into two subarrays of greater and lesser values
    //w.r.t. the pivot, and concatenating the subarrays
        let pivot = array[Math.floor(array.length*Math.random())];
        let less = [];
        let greater = [];
        if (array.length < 2) {
            return array;
        } else {
            array.forEach(elem => {
                if (elem > pivot) {
                    greater.push(elem);
                } else {
                    less.push(elem);
                }
            })
            less = quickSort(less);
            greater = quickSort(greater);
        }
        return less.concat(greater);
    }

    return {root, prettyPrint, insert, remove, find, levelOrder, preorder, inorder, postorder, height, depth, isBalanced}
}

//create Node class
const Node = (value, nodeRight, nodeLeft) => {
    const data = value || null;
    const right = nodeRight || null;
    const left = nodeLeft || null;

    return {data, right, left};
}

module.exports = Tree;

// let test = [9,5,6,6,99,2,2,9]
// let test = [7,7,4,5,3,6,7,7,1,2,8]
let test = [7,7,4,32,33,17,7,1,23,54,19,12,84,5,100]
// let test = [7,7,4,5,3,6,7,7,1,2]
const myTree = Tree(test);
myTree.insert(8)
// myTree.insert(9)


// console.log(myTree.inorder())
myTree.prettyPrint()
console.log(myTree.height())