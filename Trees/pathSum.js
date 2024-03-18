import MakeTree from "./makeTree.js";
const tree = new MakeTree;

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    if (root === null) return false;

    if (root.val == targetSum && (root.left == null && root.right == null)) return true;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    
};

const test = [
    [[5,4,8,11,null,13,4,7,2,null,null,null,1], 22],
    [[1,2,3], 5],
    [null, 0]
]

test.forEach((value) => {
    const root = tree.makeTree(value[0]);
    const result = hasPathSum(root, value[1]);
    console.log(result)
})
