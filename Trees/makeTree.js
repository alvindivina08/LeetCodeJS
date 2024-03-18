class MakeTree {
    constructor(arr) {
        arr = this.arr
    }

    makeTree(arr) {
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
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export default MakeTree;
