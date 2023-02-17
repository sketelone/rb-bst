
//create Tree class
const Tree = (array) => {
    let TreeArray = [];
    let TreeRoot = {};

    const root = () => {
        TreeArray = quickSort(removeDupes(array));
        TreeRoot = buildTree(TreeArray);
        // console.log(TreeArray, TreeRoot)
        // console.log(TreeRoot.left, TreeRoot.right)
        // console.log(TreeRoot.left.left, TreeRoot.left.right)
        // console.log(TreeRoot.right.left, TreeRoot.right.left)
        return TreeRoot;
    }

    const prettyPrint = (inputNode, prefix = '', isLeft = true) => {
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
        let rootIndex = Math.floor(array.length/2);
        // console.log(rootIndex)
        let rootNode = MyNode(array[rootIndex]);
        let right = [];
        let left = [];
        if (array.length == 1) {
            return MyNode(array[0]);
        } else {
            right = array.slice(rootIndex, array.length);
            left = array.slice(0,rootIndex);

            // array.forEach(elem => {
            //     if (elem > rootNode) {
            //         right = array.slice(0, )
            //         rootNode.right = Node(elem)
            //     } else {
            //         rootNode.left = Node(elem)
            //     }
            // })
            // console.log(right, left)
            rootNode.left = buildTree(left, rootNode.left)
            rootNode.right = buildTree(right, rootNode.right)
            // console.log(rootNode, rootNode.right, rootNode.left)
        }
        return rootNode; 
    }
    

    function removeDupes(array) {
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

    return {root, prettyPrint}
}

//create Node class
const MyNode = (value, nodeRight, nodeLeft) => {
    const data = value || null;
    const right = nodeRight || null;
    const left = nodeLeft || null;

    return {data, right, left};
}

// let test = [9,5,6,6,99,2,2,9]
// let test = [4,1,3,2,6,5,7,7,7]
const myTree = Tree(test);

// console.log(quickSort(test));
// console.log(removeDupes(test));
console.log(myTree.root());

myTree.prettyPrint();

