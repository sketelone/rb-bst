
//create Tree class
const Tree = (array) => {
    let TreeArray = [];
    let TreeRoot = {};

    const root = () => {
    //cleans array and calls buildTree to build array, returns root node
        TreeArray = quickSort(removeDupes(array));
        TreeRoot = buildTree(TreeArray);
        return TreeRoot;
    }

    const insert = (value, inputNode) => {
    //function that inserts the given value into the tree
        let node = inputNode || TreeRoot;
        if (TreeArray.includes(value)) {
            console.log("this number is already in the tree")
            return false;
        } else
        if (value < node.data) {
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
    }

    const remove = (value) => {

    }

    const find = (value, inputNode) => {
    //function that finds the given value and returns the node 
    //NEED TO FIX
        let node = inputNode || TreeRoot;
        let foundNode = {};
        if (node.data == value) {
            foundNode = node;
            return node;
        } else {
            if (node.left !== null) {
                node = find(value, node.left);
            }
            if (foundNode == {} && node.right !== null) {
                node = find(value, node.right);
            }
        }
        return foundNode;
    }

    const preorder = (inputNode, inputNodes) => {
    //traverses and prints tree in root, left, right order
    //TD: could probably be optimized
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
    //traverses and prints tree in left, root, right order
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
        //traverses and prints tree in left, right, root order
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

    return {root, prettyPrint, insert, remove, find, preorder, inorder, postorder}
}

//create Node class
const Node = (value, nodeRight, nodeLeft) => {
    const data = value || null;
    const right = nodeRight || null;
    const left = nodeLeft || null;

    return {data, right, left};
}

// let test = [9,5,6,6,99,2,2,9]
let test = [7,7,4,5,3,6,7,7,1,2]
const myTree = Tree(test);

// console.log(quickSort(test));
// console.log(removeDupes(test));
console.log(myTree.root());
// let rootNode = myTree.root();
myTree.insert(10);
myTree.prettyPrint()
myTree.insert(8);
myTree.prettyPrint()
myTree.insert(1);
myTree.prettyPrint()
myTree.insert(3);
myTree.prettyPrint()
myTree.insert(2);
myTree.prettyPrint()

// console.log(myTree.preorder())
// console.log(myTree.inorder())
// console.log(myTree.postorder())
// console.log(myTree.find(5))
