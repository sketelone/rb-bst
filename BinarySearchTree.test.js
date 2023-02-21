const Tree = require('./BinarySearchTree.js')

//initialize binary search tree
let array = [7,7,4,5,3,6,7,7,1,2]
const myTree = Tree(array);
let rootNode = myTree.root();

test('root returns object', () => {
    expect(typeof rootNode).toBe('object')
})

test('root returns correct node', () => {
    expect(rootNode.data).toBe(4)
})

test('root does not use duplicates to construct tree', () => {
    expect(myTree.preorder().length).toBe(7)
})

test('preorder returns correct array', () => {
    expect(myTree.preorder()).toStrictEqual([4,2,1,3,6,5,7]);
})

test('inorder returns correct array', () => {
    expect(myTree.inorder()).toStrictEqual([1,2,3,4,5,6,7]);
})

test('postorder returns correct array', () => {
    expect(myTree.postorder()).toStrictEqual([1,3,2,5,7,6,4]);
})

test('find returns true for elems in array', () => {
    expect(myTree.find(5)).toBeTruthy();
})

test('find returns false for elems not in array', () => {
    expect(myTree.find(77)).toBeFalsy();
})

test('insert adds one elem', () => {
    myTree.insert(8)
    expect(myTree.preorder().length).toBe(8)
})

test('insert does not add elems that are already in array', () => {
    myTree.insert(8)
    expect(myTree.preorder().length).toBe(8)
})

test('insert returns true if successful', () => {
    expect(myTree.insert(9)).toBeTruthy();
})

test('insert returns false if unsuccessful', () => {
    expect(myTree.insert(9)).toBeFalsy();
})

test('insert adds elem in the correct location', () => {
    expect(myTree.inorder()).toStrictEqual([1,2,3,4,5,6,7,8,9]);
})

test('remove removes one element', () => {
    myTree.remove(8)
    expect(myTree.preorder().length).toBe(7)
})

