/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {

    if (root === null) return 0;
    if (root.left === null && root.right === null) {
        return 1;
    }
    if (root.left === null){
        return 1 + minDepth(root.right);
    }
    if (root.right === null){
        return 1 + minDepth(root.left);
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    
};

function makeTree(arr) {
    if (!arr) return null; // empty tree
    const values = arr[Symbol.iterator]();
    const root = new TreeNode(values.next().value);
    const queue = new Set().add(root);
    for (const node of queue) {
        for (const side of ["left", "right"]) {
             const value = values.next().value;
             if (value != null) queue.add(node[side] = new TreeNode(value));
        }
    }
    return root;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const test = [
    [2,null,3,null,4,null,5,null,6],
    [3,9,20,null,null,15,7],
    [3,9,20,null,null,15,7,8,1,0,10,null,100,20,30,40]
]

test.forEach((value) => {
    const root = new makeTree(value)
    console.log(root)
    const result = minDepth(root);
    console.log(result)
})