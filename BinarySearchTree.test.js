const Tree = require('./BinarySearchTree.js')

//initialize binary search tree
let array = [7,7,4,5,3,6,7,7,1,2]
const myTree = Tree(array);

describe('root', () => {
    test('returns object', () => {
        expect(typeof myTree.root()).toBe('object');
    });
    
    test('returns correct node', () => {
        expect(myTree.root().data).toBe(4);
    });
    
    test('does not use duplicates to construct tree', () => {
        expect(myTree.preorder().length).toBe(7);
    });
});

describe('orders', () => {
    test('levelOrder returns correct array', () => {
        expect(myTree.levelOrder()).toStrictEqual([4,2,6,1,3,5,7]);
    });
    
    test('preorder returns correct array', () => {
        expect(myTree.preorder()).toStrictEqual([4,2,1,3,6,5,7]);
    });
    
    test('inorder returns correct array', () => {
        expect(myTree.inorder()).toStrictEqual([1,2,3,4,5,6,7]);
    });
    
    test('postorder returns correct array', () => {
        expect(myTree.postorder()).toStrictEqual([1,3,2,5,7,6,4]);
    });
});

describe('find', () => {
    test('find returns true for elems in array', () => {
        expect(myTree.find(5)).toBeTruthy();
    });
    
    test('find returns false for elems not in array', () => {
        expect(myTree.find(77)).toBeFalsy();
    });
});

describe('insert', () => {
    test('adds one elem', () => {
        myTree.insert(8);
        expect(myTree.preorder().length).toBe(8);
    });
    
    test('does not add elems that are already in array', () => {
        myTree.insert(8);
        expect(myTree.preorder().length).toBe(8);
    });

    test('returns boolean', () => {
        expect(typeof myTree.insert(8)).toBe('boolean');
    });
    
    test('returns true if successful', () => {
        expect(myTree.insert(9)).toBeTruthy();
    });
    
    test('returns false if unsuccessful', () => {
        expect(myTree.insert(9)).toBeFalsy();
    });
    
    test('adds elem in the correct location', () => {
        expect(myTree.inorder()).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    });
});


describe('remove', () => {
    test('returns removed node if element is in the tree', () => {
        expect(typeof myTree.remove(8)).toBe('object');
    });

    test('removes one elem', () => {
        expect(myTree.preorder().length).toBe(8);
    });
    
    test('removes elem in correct location', () => {
        expect(myTree.inorder()).toStrictEqual([1,2,3,4,5,6,7,9]);
    })

    test('returns boolean if value is in tree', () => {
        expect(typeof myTree.remove(8)).toBe('boolean');
    });
    
    test('returns false if element is not in the tree', () => {
        expect(myTree.remove(8)).toBeFalsy;
    });
});

describe('height', () => {
    test('returns correct for root', () => {
        expect(myTree.height()).toBe(3);
    });
    
    test('returns correct for leaf', () => {
        var node = myTree.find(9);
        expect(myTree.height(node)).toBe(0);
    });
    
    test('returns correct for random node', () => {
        var node = myTree.find(7);
        expect(myTree.height(node)).toBe(1);
    });
});

describe('depth', () => {
    test('depth returns correct for root', () => {
        expect(myTree.depth(myTree.root())).toBe(0);
    });
    
    test('depth returns correct for leaf', () => {
        var node = myTree.find(9);
        expect(myTree.depth(node)).toBe(2);
    });
    
    test('depth returns correct for random node', () => {
        var node = myTree.find(3);
        expect(myTree.depth(node)).toBe(2);
    });
});

describe('isBalanced', () => {
    test('isBalanced returns bool', () => {
        expect(typeof myTree.isBalanced()).toBe('boolean');
    });
    
    test('isBalanced returns true for balanced tree', () => {
        expect(myTree.isBalanced()).toBeTruthy();
    });
    
    test('isBalanced returns false for unbalanced tree', () => {
        myTree.insert(10);
        expect(myTree.isBalanced()).toBeFalsy();
    });
});

describe('rebalance', () => {
    test('rebalance returns true if successful', () => {
        expect(myTree.rebalance()).toBeTruthy();
    });
    
    test('rebalance successfully balances tree', () => {
        expect(myTree.isBalanced()).toBeTruthy();
    });
});
