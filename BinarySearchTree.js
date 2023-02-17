
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

    const insert = (value) => {
    //function that inserts the given value into the tree
        
        return;
    }

    const remove = (value) => {

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

    const toString = (node) => {
    //returns nodes as a string
        let string = "";
        string = string.concat(`( ${node.data} ) -> `)
        return string;
    }

    function buildTree(array) {
    //builds tree structure by recursively starting in the middle of the sorted 
    //array and setting adjacent elements to the right and left
        let rootIndex = Math.floor(array.length/2);
        let rootNode = MyNode(array[rootIndex]);
        let right = [];
        let left = [];
        if (array.length == 1) {
            return null;
        } else {
            right = array.slice(rootIndex, array.length);
            left = array.slice(0,rootIndex);
            rootNode.left = buildTree(left, rootNode.left)
            rootNode.right = buildTree(right, rootNode.right)
        }
        return rootNode; 
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

    return {root, prettyPrint, preorder, inorder, postorder}
}

//create Node class
const MyNode = (value, nodeRight, nodeLeft) => {
    const data = value || null;
    const right = nodeRight || null;
    const left = nodeLeft || null;

    return {data, right, left};
}

// let test = [9,5,6,6,99,2,2,9]
let test = [4,1,3,2,6,5,7,7,7]
const myTree = Tree(test);

// console.log(quickSort(test));
// console.log(removeDupes(test));
console.log(myTree.root());
// let rootNode = myTree.root();
myTree.prettyPrint()
console.log(myTree.preorder())
console.log(myTree.inorder())
console.log(myTree.postorder())
