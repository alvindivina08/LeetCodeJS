import MakeTree from './makeTree.js';
const tree = new MakeTree();

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

const test = [
    [2,null,3,null,4,null,5,null,6],
    [3,9,20,null,null,15,7],
    [3,9,20,null,null,15,7,8,1,0,10,null,100,20,30,40]
]

test.forEach((value) => {
    const root = tree.makeTree(value)
    console.log(root)
    const result = minDepth(root);
    console.log(result)
})
